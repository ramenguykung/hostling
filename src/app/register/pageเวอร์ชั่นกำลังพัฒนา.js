'use client';
import { useState, useEffect } from 'react';
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function Register() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [postalcode, setPostalCode] = useState("");
  const [error, setError] = useState("");

  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push('/welcome');
    }
  }, [session, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // แปลงค่าให้เป็นสตริงทั้งหมดก่อนที่จะส่งผ่าน query
    const res = await fetch("http://localhost:3000/api/Nextregister", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        surname: String(surname),
        name: String(name),
        month: String(month),
        day: String(day),
        year: String(year),
        gender: String(gender),
        address: String(address),
        postalcode: String(postalcode),
      })
    });
    


    router.replace('/Nextregister');

  };

  return (
    <>
      <div className={styles.container}> <h1 className={styles.SU}> Sign up </h1></div>
      <Link href="/login">
        <div className={styles.signup}> 
          - Login
        </div>
      </Link>
      <div className={styles.container}>
        <div className={styles.frame}>
          <div className={styles.container}>
            <Image src="/LogoBC.png" width={150} height={150} alt="logo" />
          </div>
          <div className={styles.Move}>
            <div className={styles.container}>
              <h1 className={styles.fon}>Let’s get to know you!</h1>  
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            {error &&(
              <div className={styles.error}>
                {error}
              </div>
            )}
            <div className={styles.frameinput}> 
              <div className={styles.Moveinput1}>
                <div className={styles.nt}>
                  <input onChange={(e) => setName(e.target.value)} className={styles.input1} type="text" placeholder="Name" />   
                  <input onChange={(e) => setSurname(e.target.value)} className={styles.input1} type="text" placeholder="Surname" />   
                </div> 
              </div>
              <div className={styles.frameinput2}>
                <div className={styles.fip2}>
                  <h5 className={styles.fontMonth}>Month</h5>
                </div>
              </div>
              <select onChange={(e) => setMonth(e.target.value)} className={styles.input} defaultValue="">
                <option value="">Select</option>
                <option value="January">January</option>
                <option value="February">February</option>
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
                <input onChange={(e) => setDay(e.target.value)} className={styles.input1} type="number" placeholder="Day" />   
                <input onChange={(e) => setYear(e.target.value)} className={styles.input1} type="number" placeholder="Year" />   
              </div>
              <input onChange={(e) => setGender(e.target.value)} className={styles.input} type="text" placeholder="Gender" /> 
              <input onChange={(e) => setAddress(e.target.value)} className={styles.input} type="text" placeholder="Address" />   
              <input onChange={(e) => setPostalCode(e.target.value)} className={styles.input} type="number" placeholder="Postal Code" />
              <button type="submit" className={styles.button}><h6 className={styles.fontsignup}>Next</h6></button>
              <br></br>
              <br></br>
              <br></br>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
