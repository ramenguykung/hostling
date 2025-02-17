"use client";
import React from 'react'
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, redirect  } from "next/navigation";
import { useSession } from "next-auth/react";
import Navbar from "../../componants/Navbar";
import styles from "./page.module.css";
import Image from "next/image";

function edit() {


    
  const { data: session } = useSession();
  const router = useRouter();


  useEffect(() => {
    if (session) {
        const user = session.user; 
        const id = session.user.id;
        getPostById(id);
        // console.log(id);
       
    }
}, [session]);






  const [postData, setPostData] = useState([]);

  const [newname, setNewName] = useState("");
  const [newsurname, setNewSurname] = useState("");
    
  const [newMonth, setNewMonth] = useState("");
  const [newDay, setNewDay] = useState("");
  const [newYear, setNewYear] = useState("");

  const [newJob, setNewJob] = useState("");
  const [newGender, setNewGender] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");                                  
  const [newAge, setNewAge] = useState("");
  

  const [error,setError] = useState("");



  

   
  
   

   

   
   
    const getPostById = async (id) => {
        try {
            const res = await fetch(`http://localhost:3000/api/edit/${id}`, {
                method: "GET",
                cache: "no-store"
             
                
            });

            if (!res.ok) {
                throw new Error("Failed to fetch a post");
             
            }

            const data = await res.json();
            console.log("Edit post: ", data);
        
            setPostData(data);
        } catch (error) {
            console.log(error);
        }
    };


    if (!session) {
        return null; // หรือคุณสามารถแสดงข้อความแจ้งให้เข้าสู่ระบบก่อน
    }
    // console.log(session);
    
  

  

   
    const user = session.user; 
    const id = session.user.id;

    const handleSubmit = async (e) => {
        e.preventDefault();

      

           


            if (newPhoneNumber.length !== 10 || !/^\d+$/.test(newPhoneNumber)) {
              setError("Phone must contain only numbers and be no longer than 10 digits.");
              return;
          }



          if (!/^\d{1,2}$/.test(newDay)) {
            setError("day must contain only numbers and be no longer than 2 digits.");
            
            return;
          }



          if (!/^(0?[1-9]|[12][0-9]|3[01])$/.test(newDay)) {
            setError("Day must be a number between 1 and 31.");
            return;
        }
        

          if (!/^\d{4}$/.test(newYear)) {
            setError("Year must contain only numbers and exactly 4 digits.");
            return;
        }

        if (!/^\d{2}$/.test(newAge)) {
          setError("age must contain only numbers and exactly 2 digits.");
          return;
      }



        

          if (!/^[a-zA-Zก-๙]+$/.test(newname)) {
            setError("Name must contain only letters.");
            return;
        }

        if (!/^[a-zA-Zก-๙]+$/.test(newJob)) {
          setError("occupation must contain only letters.");
          return;
      }

        if (!/^[a-zA-Zก-๙]+$/.test(newsurname)) {
            setError("Surname must contain only letters.");
            return;
        }



    try {
        const res = await fetch(`http://localhost:3000/api/edit/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ newname, newsurname,id,newMonth,newDay,newYear,newJob,newGender,newAddress,newPhoneNumber,newAge })
        })

        if (!res.ok) {
            throw new Error("Failed to update post")
        }

        router.refresh();
         router.push("/Profile");

    } catch(error) {
        console.log(error);
    }
}


  
  return (
   <>
   
   <Navbar session={session} />

{/* <div className={styles.container}>
<h1 className={styles.SU}>Profile</h1>

</div> */}

<div className={styles.po}>
    <Image src="/po.svg" width={150} height={150} alt="logo" />
</div>

<form onSubmit={handleSubmit}>

                            {error &&(
                                            <div className={styles.error}>
                                                {error}
                                            </div>
                                          )}   


<div className={styles.container}>
    <div className={styles.frame}>
        <div className={styles.frameinput2}>


                                       
            {/* <h5 className={styles.fip2}>Name</h5> */}
            <input onChange={(e) => setNewName(e.target.value)}  className={styles.input} type="text"  placeholder="Name"  list="Name" required />   
                                         <datalist id="Name">
                                          
                                          <option value={postData?.post?.name} />
                                      
                                      </datalist>   
           

            {/* <h5 className={styles.fip3}>Last name </h5> */}
            <br></br>

            <input onChange={(e) => setNewSurname(e.target.value)}  className={styles.input} type="text"  placeholder="Surname"  list="Surname" required />    
            <datalist id="Surname">
                                          
                                          <option value={postData?.post?.surname} />
                                      
                                      </datalist>   
            <br></br>

            {/* <h5 className={styles.fip4}>Day</h5>

            <h5 className={styles.fip5}>Month</h5>

            <h5 className={styles.fip6}>Year</h5> */}

            <div className={styles.nt}>
            <input onChange={(e) => setNewDay(e.target.value)}  className={styles.input} type="text"  placeholder="Day" required list="day-options" />
            <datalist id="day-options">
                                          {Array.from({ length: 31 }, (_, index) => (
                                            <option key={index + 1} value={index + 1} />
                                          ))}
                                        </datalist>  

            <select onChange={(e) => setNewMonth(e.target.value)}  className={styles.input} defaultValue="" required >
                                                
                                              
                                                <option value="" > Select</option>
                                              
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
          
            <input onChange={(e) => setNewYear(e.target.value)}  className={styles.input} type="text"  placeholder= "Year" list="Year" required />  
            <datalist id="Year">
                                          
                                          <option value={postData?.post?.year} />
                                      
                                      </datalist>  
               
             
            </div>
            <br></br>

            {/* <div className={styles.fip7}>
                <h5 className={styles.fontMonth}>age</h5>
            </div>

            <div className={styles.fip8}>
                <h5 className={styles.fontMonth}>Phone No.</h5>
            </div>

            <div className={styles.fip9}>
                <h5 className={styles.fontMonth}>
                    Resident Registration Address
                </h5>
            </div> */}

            {/* <div className={styles.fip10}>
                <h5 className={styles.fontMonth}>job</h5>
            </div> */}

            <input onChange={(e) => setNewAge(e.target.value)}  className={styles.input} type="text"  placeholder="Age" list="Age" required />
            <datalist id="Age">
                                          
                                          <option value={postData?.post?.age} />
                                      
                                      </datalist>  
            
            <br></br>
            <input onChange={(e) => setNewPhoneNumber(e.target.value)}  className={styles.input} type="text"  placeholder="Phone Number" list="PhoneNumber" required /> 
            <datalist id="PhoneNumber">
                                          
                                          <option value={postData?.post?.phonenumber} />
                                      
                                      </datalist>     
          
            <br></br>
            <input onChange={(e) => setNewAddress(e.target.value)}  className={styles.input} type="text"  placeholder="Address"list="Address" required />  
            <datalist id="Address">
                                          
                                          <option value={postData?.post?.address} />
                                      
                                      </datalist>   
           

            <br></br>
            <input onChange={(e) => setNewJob(e.target.value)}  className={styles.input} type="text"  placeholder="Job"  list="job" required /> 
            <datalist id="job">
                                          
                                            <option value={postData?.post?.job} />
                                        
                                        </datalist> 
            <br></br>
          
                                        


            
           
  
            <button type="submit" className={styles.button}>
                    <h6 className={styles.fontsignup}>SAVE</h6>
                </button>

               
             
             
        </div>
       
    </div>
</div>
</form>
   
   
   
   
   
   
   
   
   
   </>


      
   
  )
}

export default edit