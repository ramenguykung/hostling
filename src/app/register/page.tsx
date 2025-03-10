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
            
            const [job, setJob] = useState("");
            const [gender, setGender] = useState("");
            const [address, setAddress] = useState("");
            const [phonenumber, setPhonenumber] = useState("");
            const [email,setEmail] = useState("");
            const [password,setPassword] = useState("");
            const [confirmpassword,setConfirmpassword] = useState("");

            const [error,setError] = useState("");
            const [age,setAge] = useState("");

            const [erroremail,setErroemailr] = useState("");
            const [showPassword, setShowPassword] = useState(false);
           
         
            const togglePasswordVisibility = () => {
              setShowPassword(!showPassword);
          };

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


                            if (phonenumber.length !== 10 || !/^\d+$/.test(phonenumber)) {
                              setError("Phone must contain only numbers and be no longer than 10 digits.");
                              return;
                          }



                          if (!/^\d{1,2}$/.test(day)) {
                            setError("day must contain only numbers and be no longer than 2 digits.");
                            
                            return;
                          }



                          if (!/^(0?[1-9]|[12][0-9]|3[01])$/.test(day)) {
                            setError("Day must be a number between 1 and 31.");
                            return;
                        }
                        

                          if (!/^\d{4}$/.test(year)) {
                            setError("Year must contain only numbers and exactly 4 digits.");
                            return;
                        }

                        if (!/^\d{2}$/.test(age)) {
                          setError("age must contain only numbers and exactly 2 digits.");
                          return;
                      }



                        

                          if (!/^[a-zA-Zก-๙]+$/.test(name)) {
                            setError("Name must contain only letters.");
                            return;
                        }

                        if (!/^[a-zA-Zก-๙]+$/.test(job)) {
                          setError("occupation must contain only letters.");
                          return;
                      }
                
                        if (!/^[a-zA-Zก-๙]+$/.test(surname)) {
                            setError("Surname must contain only letters.");
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
                                      surname,name,month,day,year, gender,address,phonenumber,email, password,age,job
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
                                        <input onChange={(e) => setName(e.target.value)}  className={styles.input1} type="text"  placeholder="Name"   required />   
                                        <input onChange={(e) => setSurname(e.target.value)}  className={styles.input1} type="text"  placeholder="Surname"   required />   
                                            </div> 
                                            </div>
                                            


                                            <div className={styles.frameinput2}>

                                                <div className={styles.fip2}>
                                                <h5 className={styles.fontMonth}>Month</h5>
                                                </div> 

                                                
          
                                                </div>

                                                <select onChange={(e) => setMonth(e.target.value)}  className={styles.input} defaultValue=""  required >
                                                
                                              
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
                                        <input onChange={(e) => setDay(e.target.value)}  className={styles.input1} type="text"  placeholder="Day" required   list="day-options" />
                                        <datalist id="day-options">
                                          {Array.from({ length: 31 }, (_, index) => (
                                            <option key={index + 1} value={index + 1} />
                                          ))}
                                        </datalist>   

                                        <input onChange={(e) => setYear(e.target.value)}  className={styles.input1} type="text"  placeholder="Year" required />   
                                            </div> 
                                          
                                                
                                           
                                            
                                            <select
                                                        onChange={(e) => setGender(e.target.value)}
                                                        className={styles.input}
                                                        defaultValue=""  required >
                                                        <option value="">Gender</option>
                                                        <option value="man">man</option>
                                                        <option value="woman">woman</option>
                                                    </select>

                                                    <input onChange={(e) => setJob(e.target.value)}  className={styles.input1} type="text"  placeholder="Job" required /> 
                                                    <input onChange={(e) => setAge(e.target.value)}  className={styles.input1} type="text"  placeholder="age" required />

                                                <input onChange={(e) => setAddress(e.target.value)}  className={styles.input} type="text"  placeholder="Address according to ID card"required  />   
                                                <input onChange={(e) => setPhonenumber(e.target.value)}  className={styles.input} type="text"  placeholder="phone number"required  />  

                                                <input id="emailInput" onChange={(e) => setEmail(e.target.value)} className={styles.input} type="email" placeholder="Email" required />

                                                <input onChange={(e) => setPassword(e.target.value)}  className={styles.input} type="password"  placeholder="Password" required  type={showPassword ? "text" : "password"}/>   
                                                <input onChange={(e) => setConfirmpassword(e.target.value)}  className={styles.input} type="password"  placeholder="Confirmpassword" required type={showPassword ? "text" : "password"} />     

                                                <div  className={styles.MovetoggleButton}>
                                <div
                                                type="button"
                                                onClick={togglePasswordVisibility}
                                                className={styles.toggleButton}
                                            >

                                                {showPassword ?   <Image src ="/EyeClosed.png" width={20}  height={20} alt="logo" /> :   <Image src ="/EyeOpen.png" width={20}  height={20} alt="logo" /> }

                                            </div>
                                            </div>

                                            
                                           < div  className={styles.MovetoggleButtonn}>
                                <div
                                                type="button"
                                                onClick={togglePasswordVisibility}
                                           
                                            >

                                                {showPassword ?   <Image src ="/EyeClosed.png" width={20}  height={20} alt="logo" /> :   <Image src ="/EyeOpen.png" width={20}  height={20} alt="logo" /> }

                                            </div>
                                            </div>

                                              
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