"use client";
import { useSession } from "next-auth/react";
import styles from "./page.module.css";
import Navbar from "./componants/Navbar";
import Image from "next/image";


export default function Home() {
    const { data: session } = useSession();

   
    


    return (
        <>
            <Navbar session={session} />

           
            <div className={styles.titleholder}>



                <h1 className={styles.text}>หอพัก 91</h1>






            </div>


              {/* <h1>คันหน้าาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาา</h1> */}

                <br></br>

            <div className={styles.images}>

            <div className={styles.images1}>


            </div>

            <div className={styles.images1}>


            </div>

            <div className={styles.images1}>




            </div>


            <div className={styles.images1}>





            </div>




    



            </div>


            {/* <h1>คันหน้าาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาา</h1> */}

            <div className={styles.storyboard}>

            <div className={styles.topnavigation}>  

            <h2>Overview</h2>

            <h2>Environment</h2>

            <h2>Feedback</h2>

            </div>

            {/* <h1>คันหน้าาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาา</h1> */}


            <div className={styles.middleholder}>

            

                <div className={styles.mediaplaceholder}>


                 </div>

                         <div className={styles.divider}>

                            </div>



                 <div className={styles.storyboardtextrightbutton}>

                 <button    className={styles.buttonIconLeft}>     
           <Image src ="/IconLeft.png" width={20}  height={20} alt="logo" /> 
              </button> 



                </div>






            </div>


            </div>




        </>
    );
}
