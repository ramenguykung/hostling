"use client"; // เพิ่มบรรทัดนี้ที่จุดเริ่มต้นของไฟล์

import Navbar from "../componants/Navbar";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";
import {  useRouter,redirect } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    const { data: session } = useSession();
    const [postData, setPostData] = useState([]);
    const router = useRouter();
   
    
    useEffect(() => {
        if (session) {
            const user = session.user; 
            const id = session.user.id;
            getPostById(id);
            // console.log(id);
           
        }
    }, [session]);

   
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
    const user = session.user; 
    
//  console.log(session.user?.id);
    return (
        <>
            <Navbar session={session} />

            {/* <div className={styles.container}>
            <h1 className={styles.SU}>Profile</h1>

          </div> */}

            <div className={styles.po}>
                <Image src="/po.svg" width={150} height={150} alt="logo" />
            </div>

            <div className={styles.container}>
                <div className={styles.frame}>
                    <div className={styles.frameinput2}>
                        <h5 className={styles.fip2}>Name</h5>

                        <div
                            className={styles.input}
                           >
                            
                            
                                {postData?.post?.name}
                               
                            </div>

                        <h5 className={styles.fip3}>Last name </h5>
                        <br></br>

                        <div className={styles.input}
                            >
                           
                       

                            {postData?.post?.surname}
                        </div>
                        <br></br>

                        <h5 className={styles.fip4}>Day</h5>

                        <h5 className={styles.fip5}>Month</h5>

                        <h5 className={styles.fip6}>Year</h5>

                        <div className={styles.nt}>
                            <div
                                className={styles.input1}
                               >
                                   

                                    {postData?.post?.day}
                            </div>
                            <div
                                className={styles.input1}
                               >
                                {postData?.post?.month}
                            </div>
                            <div
                                className={styles.input1}
                                >
                                {postData?.post?.year}
                            </div>
                        </div>
                        <br></br>

                        <div className={styles.fip7}>
                            <h5 className={styles.fontMonth}>Age</h5>
                        </div>

                        <div className={styles.fip8}>
                            <h5 className={styles.fontMonth}>Phone No.</h5>
                        </div>

                        <div className={styles.fip9}>
                            <h5 className={styles.fontMonth}>
                                Resident Registration Address
                            </h5>
                        </div>

                        <div className={styles.fip10}>
                            <h5 className={styles.fontMonth}>Job</h5>
                        </div>
                        <div
                            className={styles.input}
                            >
                            {postData?.post?.age}
                            </div>
                        <br></br>
                        <div
                            className={styles.input}
                           >
                            {postData?.post?.phonenumber}
                        </div>
                        <br></br>
                        <div
                            className={styles.input}
                            >
                           {postData?.post?.address}
                        </div>
                        <br></br>
                        <div
                            className={styles.input}
                            >
                            {postData?.post?.job}
                        </div>



                                <div className={styles.fip11}>
                            <h5 className={styles.fontMonth}>Email</h5>
                        </div>
                        <br></br>
                        <div
                            className={styles.input}
                            >
                            {postData?.post?.email}
                          
                        </div>
                        <br></br>
                       
                        <Link href={`/edit/${postData?.post?.id}`}>
                        <button  className={styles.button}>
                                <h6 className={styles.fontsignup}>Edit Profile</h6>
                            </button>

                            </Link> 


                    </div>
                </div>
            </div>
        </>
    );
}

{
    /* <div className={styles.nt}>
            <p>name: {user.name}</p>  <p>surname: {user.surname}</p>
            </div>
            <p>Date of birth: {user.day} {user.month}  {user.year}</p>
            <p>Gender: {user.gender}</p>

            <p>Address: {user.address}</p>
            <p>Postal Code: {user.postalcode}</p>
            <p>Role: {user.role}</p> */
}
