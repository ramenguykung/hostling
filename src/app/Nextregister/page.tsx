'use client';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './page.module.css';

function Nextregister() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [error, setError] = useState('');

  // รับค่าจาก query
  const name = searchParams.get('name') || '';
  const surname = searchParams.get('surname') || '';
  const month = searchParams.get('month') || '';
  const day = searchParams.get('day') || '';
  const year = searchParams.get('year') || '';
  const gender = searchParams.get('gender') || '';
  const address = searchParams.get('address') || '';
  const postalcode = searchParams.get('postalcode') || '';






  useEffect(() => {
    console.log('name:', name);
    console.log('surname:', surname);
    console.log('month:', month);
    console.log('day:', day);
    console.log('year:', year);
    console.log('gender:', gender);
    console.log('address:', address);
    console.log('postalcode:', postalcode);
  }, [name, surname, month, day, year,  gender, address, postalcode]);

  const handleSubmit = async (e) => {
    e.preventDefault();

   if (password != confirmpassword) {
   setError("Password do not match!");
   return;
   }

   if ( !email ||  !password || !confirmpassword) { 
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
    <div className={styles.container}>
      <h1 className={styles.SU}>Account Information</h1>
      <form onSubmit={handleSubmit}>
        {error && (
          <div className={styles.error}>
            {error}
          </div>
        )}
        <div className={styles.frameinput}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            type="email"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            type="password"
            placeholder="Password"
          />
          <input
            onChange={(e) => setConfirmpassword(e.target.value)}
            className={styles.input}
            type="password"
            placeholder="Confirm Password"
          />
          <button type="submit" className={styles.button}>
            <h6 className={styles.fontsignup}>Sign up</h6>
          </button>
          <br />
          <br />
          <br />
        </div>
      </form>
    </div>
  );
}

export default Nextregister;
