"use client"
import { useState } from 'react';
import styles from "./page.module.css"
import Link from "next/link"
import Image from "next/image"
import { useSession } from 'next-auth/react';
import { redirect , useRouter} from 'next/navigation'


function Admin() {

          
            
            
            const [email,setEmail] = useState("");
            const [password,setPassword] = useState("");
         

           
           
         
        

            const { data: session } = useSession();
            if (session) redirect('/welcome');

            const router = useRouter();
        


                          const handleSubmit = async (e) => {
                             e.preventDefault();

                           







               


                           

                                
                            try {

                              









                              const res = await fetch("http://localhost:3000/api/Admin", {
                                  method: "POST",
                                  headers: {
                                      "Content-Type": "application/json"
                                  },
                                  body: JSON.stringify({
                                      email, password
                                  })
                              })

                              



                  
                              if (res.ok) {
                                const form = e.target;
                                setError("");
                        
                                  form.reset();
                                router.push('/login');
                               
                            } else {
                                console.log("User registration failed.")
                            }
                  
                          } catch(error) {
                              console.log("Error during registration: ", error)
                          }

                      }

                      

    return (
      
      <>
              

                            
                    <div className={styles.container}> <h1 className={styles.SU}> Sign up </h1></div>

                                             
                                            <Link href={"/login"}>
                                            <div className={styles.signup}> 
  
                                            <button    className={styles.buttonIconLeft}>     
           <Image src ="/IconLeft.png" width={20}  height={20} alt="logo" /> 
              </button> 
                                            </div>
                                            </Link> 

                                            
                                           

                                         

                                 <div className={styles.container}>
                                    <div className={styles.frame}> 
                                    <div className={styles.container}>
        <Image src ="/LogoBC.png" width={150}  height={150} alt="logo" /> 
        </div>                                  

       

        

                                        <div className={styles.Move}> 
                                    <div className={styles.container}> 
                                        <h1 className={styles.fon} > Let’s get to know you! </h1>  
                                        </div>
                                        </div>


                                 
                                        
                                        <form onSubmit={handleSubmit}>


                                       

                                            

                                          
                         

                                        <div className={styles.frameinput}> 


                                        
                                                    <div className={styles.Moveinput1}>
                                        <div className={styles.nt}>
                                        
                                            </div> 
                                            </div>
                                            


                                            <div className={styles.frameinput2}>

                                                <div className={styles.fip2}>
                                                <h5 className={styles.fontMonth}>Month</h5>
                                                </div> 

                                                
          
                                                </div>

                                                

                                            
                                       
                                          
                                                
                                           
                                            
                                           

                                                   

                                                <input id="emailInput" onChange={(e) => setEmail(e.target.value)} className={styles.input} type="email" placeholder="Email" required />

                                                <input onChange={(e) => setPassword(e.target.value)}  className={styles.input} type="password"  placeholder="Password" required  />   
                                                

                                               

                                          

                                               

                                           

                                              
                                                <button   type="submit"  className={styles.button}>
                                               <h6 className={styles.fontsignup}>Sign up</h6> 
                                                </button> 
                                               

                                                
                                                                    <br></br>
                                                                    <br></br>
                                                                    <br></br>
                                        </div>

                                       
                                        </form>
                                         </div>
                                         </div>
                                         





      </>
       
 
    )
  }
   
  export default Admin