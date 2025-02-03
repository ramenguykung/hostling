"use client"
import Link from "next/link"
import styles from "./Navbar.module.css"
import { signOut } from 'next-auth/react'
import Image from "next/image";


export default function Navbar({ session }){

   


    return(

        <nav className={styles.nav}>
          

      
            <div className={styles.nt}>
            {!session ? (
                <></>
                ) : (
                
                <Image src ="/po.svg" width={40}  height={40} alt="logo" /> 
              

                )}
           <h1> |</h1>
           <Link href={"/"}> 
            <h1>Home </h1>
            </Link> 

            {/* <Link href={"/"}> 
            <h1>Contact</h1>
            </Link>  */}
            </div>
            


            {!session ? (
           <ul>
           <Link href={"/login"}> 
           <button className={styles.button} >Rent Now</button> 
           </Link> 

           </ul>

        ) : (
            <>
            <ul>
            <div className={styles.nt}>
            <Link  href="/Profile" > <button className={styles.button} >Profile </button> </Link>
            <button className={styles.Logout}  onClick={() => signOut()}> Logout</button>
            </div>
         
 
            </ul>

            </>

        )}







        </nav>

    )


} 