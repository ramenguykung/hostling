"use client"
import { useState } from 'react';
import styles from "./page.module.css"
import Link from "next/link"
import Image from "next/image"
import { useSession } from 'next-auth/react';
import { redirect , useRouter} from 'next/navigation'


function register() {

            const [name,setName] = useState("");
            const [surname,setSurname] = useState("");
            const [month, setMonth] = useState("");
            const [day, setDay] = useState("");
            const [year, setYear] = useState("");
            const [gender, setGender] = useState("");
            const [address, setAddress] = useState("");
            const [postalcode, setPostalCode] = useState("");
            const [email,setEmail] = useState("");
            const [password,setPassword] = useState("");
            const [confirmpassword,setConfirmpassword] = useState("");
            const [error,setError] = useState("");
         
            const [erroremail,setErroemailr] = useState("");
         


            const { data: session } = useSession();
            if (session) redirect('/welcome');

            const router = useRouter();
        


                          const handleSubmit = async (e) => {
                             e.preventDefault();

                            if (password != confirmpassword) {
                            setError("Password do not match!");
                            return;
                            }

                            if (!name || !surname || !month|| !email ||  !password || !confirmpassword) { 
                              setError("Please complete all inputs!");
                              return;

                            }

               


                            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                            if (!emailPattern.test(email)) {
                              setErroemailr("Please enter a valid email address (e.g. user@example.com)");
                                return;
                            }

                                
                            try {

                              const resCheckUser = await fetch("http://localhost:3000/api/usercheck", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({ email })
                            })
                    
                            const { user } = await resCheckUser.json();
                    
                            if (user) { 
                                setError("User already exists.");
                                return;
                            }









                              const res = await fetch("http://localhost:3000/api/register", {
                                  method: "POST",
                                  headers: {
                                      "Content-Type": "application/json"
                                  },
                                  body: JSON.stringify({
                                      surname,name,month,day,year, gender,address, postalcode,email, password
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
  
                                                    - Login
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


                                       

                                            

                                          {error &&(
                                            <div className={styles.error}>
                                                {error}
                                            </div>
                                          )}      


                                          { erroremail &&(
                                          
                                           <div  className={styles.error1}>
                                                {erroremail}
                                            </div>
                                          
                                          )} 
                                          
                         

                                        <div className={styles.frameinput}> 


                                        
                                                    <div className={styles.Moveinput1}>
                                        <div className={styles.nt}>
                                        <input onChange={(e) => setName(e.target.value)}  className={styles.input1} type="text"  placeholder="Name" />   
                                        <input onChange={(e) => setSurname(e.target.value)}  className={styles.input1} type="text"  placeholder="Surname" />   
                                            </div> 
                                            </div>
                                            


                                            <div className={styles.frameinput2}>

                                                <div className={styles.fip2}>
                                                <h5 className={styles.fontMonth}>Month</h5>
                                                </div> 

                                                
          
                                                </div>

                                                <select onChange={(e) => setMonth(e.target.value)}  className={styles.input} defaultValue="">
                                                
                                              
                                                 <option value="" >Select</option>
                                                  <option value="January">January</option>
                                                  <option value="Fabuary">Fabuary</option>
                                                  <option value="March">March</option>
                                                  <option value="April">April</option>
                                                  <option value="May">May</option>
                                                  <option value="June">June</option>
                                                  <option value="July">July</option>
                                                  <option value="August">August</option>
                                                  <option value="September">September</option>
                                                  <option value="October">October</option>
                                                  <option value="November">November</option>
                                                  <option value="December">December</option>
                                                </select>


                                            
                                        <div className={styles.nt}>
                                        <input onChange={(e) => setDay(e.target.value)}  className={styles.input1} type="number"  placeholder="Day" />   
                                        <input onChange={(e) => setYear(e.target.value)}  className={styles.input1} type="number"  placeholder="Year" />   
                                            </div> 
                                          
                                                
                                           
                                                
                                            <input onChange={(e) => setGender(e.target.value)}  className={styles.input} type="text"  placeholder="Gender" /> 
                                                <input onChange={(e) => setAddress(e.target.value)}  className={styles.input} type="text"  placeholder="Address" />   
                                                <input onChange={(e) => setPostalCode(e.target.value)}  className={styles.input} type="number"  placeholder="Postal Code" />  

                                                <input id="emailInput" onChange={(e) => setEmail(e.target.value)} className={styles.input} type="email" placeholder="Email" required />

                                                <input onChange={(e) => setPassword(e.target.value)}  className={styles.input} type="password"  placeholder="Password" />   
                                                <input onChange={(e) => setConfirmpassword(e.target.value)}  className={styles.input} type="password"  placeholder="Confirmpassword" />     

                                              
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
   
  export default register