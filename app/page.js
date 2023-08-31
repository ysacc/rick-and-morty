"use client"
import Form from "@/components/Validation/Form";
import { useEffect, useState,} from "react";
import { useRouter } from 'next/navigation'
import styles from './page.module.css'



export default function Home(){
    const [access,setAccess] = useState(false)
    const router = useRouter();
    const username = "mail@ggg.com";
    const password = "123456";
    function login (userData) {
        if (userData.password === password && userData.username === username) {
          setAccess(true);
          router.push('/characters');
        }
      }
      useEffect(() => {
        !access && router.push('/');
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [access]);
    return(
        <div className={styles.login}>
            <h1 className={styles.title} >Welcome to the Multiverse!</h1>
            <p className={styles.p}>Embark on an interdimensional journey with Rick and Morty. Get ready for adventure, science, and a whole lot of chaos!</p>
            <p className={styles.p}>Are you ready to explore the unknown?</p>
            <Form login={login}/>
        </div>
    )
}