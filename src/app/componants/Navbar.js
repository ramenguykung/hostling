import Link from "next/link"
import styles from "./Navbar.module.css"

/**
 * A component that returns HTML document upon the call 
 * @returns HTML document on the call
 */
export default function Navbar(){
    return(

        <nav className={styles.nav}>
          
            <div className={styles.nt}>
           <h1>แถบ |</h1>
           <Link href={"/"}> 
            <h1>Home </h1>
            </Link> 

            <Link href={"/"}> 
            <h1>Contact</h1>
            </Link> 
            </div>
            
           <ul>
           <Link href={"/login"}> 
           <button className={styles.button} >Rent Now</button> 
           </Link> 

           </ul>
        </nav>

    )


} 