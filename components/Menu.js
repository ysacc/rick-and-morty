import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import SvgIcon from '@mui/material/SvgIcon';
import { createSvgIcon } from '@mui/material/utils';
import Link from 'next/link';
import { IoMdPerson ,IoIosNuclear,IoLogoGithub,IoLogoNodejs} from "react-icons/io";

function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  };
const PlusIcon = createSvgIcon(
    // credit: plus icon from https://heroicons.com/
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>,
    'Plus',
  );  
export default function IconMenu() {
  return (
    <Paper sx={{ width: 320, maxWidth: '100%' }}>
      <MenuList>
        <Link href={"/"}passHref>
        <MenuItem>
          <ListItemIcon>
            <IoMdPerson/>
          </ListItemIcon>
          <ListItemText style={{ textDecoration: 'none' }}>Log Out</ListItemText>
        </MenuItem>
        </Link>
        <Link href={"/characters"}>
        <MenuItem>
          <ListItemIcon>
            <IoIosNuclear />
          </ListItemIcon>
          <ListItemText>Characters</ListItemText>
        </MenuItem>
        </Link>
        <Link href={"/about"}>
        <MenuItem>
          <ListItemIcon>
            <IoLogoNodejs/>
          </ListItemIcon>
          <ListItemText>About</ListItemText>
        </MenuItem>
        </Link>
        <Divider />
        <Link href={"http://github.com/ysacc"}>
        <MenuItem>
          <ListItemIcon>
            <IoLogoGithub />
          </ListItemIcon>
          <ListItemText>Git Repository</ListItemText>
        </MenuItem>
        </Link>
      </MenuList>
    </Paper>
  );
}
