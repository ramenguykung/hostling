"use client"
import styles from "./page.module.css"
import Link from "next/link"
import Image from "next/image"
import { useState } from 'react';
import { useForm, ErrorMessage } from 'react-hook-form'
import Loader from 'react-loader-spinner'


export default function Home() {

  const [erroremail,setErroemailr] = useState("");
  const [email,setEmail] = useState("");
  const [error,setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if ( !email ) { 
    //   setError("Please complete all inputs!");
    //   return;
    //   }

        
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(email)) {
        setErroemailr("Please enter a valid email address (e.g. user@example.com)");
          return;
      }

    }



          








    return (

        <>


<div className={styles.Frame4}>


<div className={styles.Frame3}>


<div className={styles.login}   >
<div className={styles.textmo}>
<h2 className={styles.text}  >Aw Snap,</h2>
</div>

 <h2 className={styles.text}>
 forgot password?</h2>

 <h2 className={styles.textcontent}>Don’t worry. We’ve got you covered!</h2>
<br></br>
<br></br>


<form onSubmit={handleSubmit}>


                              
  


                                { erroremail &&(
                                          
                                          <div  className={styles.error1}>
                                               {erroremail}
                                           </div>
                                         
                                         )} 

<div className={styles.ipg1}>
<input id="emailInput" onChange={(e) => setEmail(e.target.value)} className={styles.input} type="email" placeholder="Email" required />



<button  type="submit"  className={styles.button} ><h6 className={styles.fontLogin}>Reset Password</h6></button>   



 
</div>
</form>

<div className={styles.o}>
<div className={styles.nt}>

<h4 className={styles.textAm}> Already a member? </h4>

<Link href={"/login"}>
<h4 className={styles.textLogin}> Login </h4>
  
</Link>

</div>
</div>






<br></br>




  </div>




<div className={styles.logologin}>    
  <Image src ="/fm.png" width={550}  height={500} alt="logo" />   
   </div>




</div>
</div>  

</>

);
}