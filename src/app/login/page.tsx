import styles from "./page.module.css"
import Link from "next/link"
import Image from "next/image"

export default function Login() {
    return (
      
      <>

      

<div className={styles.containerLogin}>  
        <h2 className={styles.text}>Login</h2>
      </div>

        <div>
      <Link href={"/"}>
      <div className={styles.home}> 
      
            - Home 
            
      </div>
      </Link> 
      </div>
     

        <div className={styles.container}>
        <div className={styles.login}   >

        <div className={styles.container}>
        <Image src ="/iooo.png" width={150}  height={150} alt="logo" /> 
        </div>

       

            

            <div className={styles.space}>


              
              <div className={styles.ipg1}>
                <div className={styles.rad}>
                     <div className={styles.o}>

                    <div className={styles.Move}>
                    <Image src ="/icon1.png"  width={10}  height={10} alt="logo" /> 
                    </div>
                     
            </div>      
                </div>

                <input  className={styles.input} type="Email"  placeholder="Email" />   
          
              </div>


              <div className={styles.ipg1}>
              <div className={styles.rad}>
                     <div className={styles.o}>
                     <div className={styles.Move}>
                     <Image src ="/icon1.png" width={10}  height={10} alt="logo" /> 
                     </div>
            </div>      
                </div>

                <input  className={styles.input} type="Password"  placeholder="Password" />   

              </div>



             




              </div>


              <button className={styles.button} ><h6 className={styles.fontLogin}>Login</h6></button> 


              <br></br>
              <br></br>

            <div className={styles.nt}>
            <div className={styles.fp}>
            Forgot password?
            </div>

            <div className={styles.space}> </div>

            <Link href={"/register"}>
            <div className={styles.su}>
            Sign up
            </div>
            </Link>


            </div>



         

            



          
         </div>
          </div>
         


          <br>
          </br>
          <br>
          </br>
          <br></br>
          <br></br>



      </>
       
 
    )
  }
   