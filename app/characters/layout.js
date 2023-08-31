import SearchAppBar from '@/components/SearchBar/SearchAppBar'
import {Comic_Neue }from 'next/font/google'
import "./style.css"
export const metadata = {
  title: 'Rick and Morty - characters',
  description: 'Search characters',
}
const Comic = Comic_Neue({
  weight: ["300","400","700"],
  styles:["italic","normal"],
  subsets:["latin"],
})
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className={Comic.className}>
        <SearchAppBar/>
        {children}
        </body>
    </html>
  )
}
