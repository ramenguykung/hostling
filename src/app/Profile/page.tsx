"use client"; // เพิ่มบรรทัดนี้ที่จุดเริ่มต้นของไฟล์

import Navbar from "../componants/Navbar";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
    const { data: session, status } = useSession();
    const [postData, setPostData] = useState([]);

    useEffect(() => {
        if (!session && status !== "loading") {
            redirect("/");
        } else {
            getPosts();
        }
    }, [session, status]);

    const getPosts = async () => {
        try {
            const res = await fetch("/api/register", {
                cache: "no-store",
            });

            if (!res.ok) {
                throw new Error("Failed to fetch posts");
            }

            const data = await res.json();
            setPostData(data.posts);
        } catch (error) {
            console.log("Error loading posts: ", error);
        }
    };

    if (!session) {
        return null; // หรือคุณสามารถแสดงข้อความแจ้งให้เข้าสู่ระบบก่อน
    }
    console.log(session);

    const user = session.user;

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

                        <input
                            className={styles.input1}
                            type="text"
                            placeholder={user.name}
                        />

                        <h5 className={styles.fip3}>Last name </h5>
                        <br></br>

                        <input
                            className={styles.input}
                            type="text"
                            placeholder={user.surname}
                        />
                        <br></br>

                        <h5 className={styles.fip4}>Day</h5>

                        <h5 className={styles.fip5}>Month</h5>

                        <h5 className={styles.fip6}>Year</h5>

                        <div className={styles.nt}>
                            <input
                                className={styles.input1}
                                type="number"
                                placeholder={user.day}
                            />
                            <input
                                className={styles.input1}
                                type="number"
                                placeholder={user.month}
                            />
                            <input
                                className={styles.input1}
                                type="number"
                                placeholder={user.year}
                            />
                        </div>
                        <br></br>

                        <div className={styles.fip7}>
                            <h5 className={styles.fontMonth}>E-mail</h5>
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
                            <h5 className={styles.fontMonth}>Role</h5>
                        </div>
                        <input
                            className={styles.input}
                            type="text"
                            placeholder={user.email}
                        />
                        <br></br>
                        <input
                            className={styles.input}
                            type="text"
                            placeholder={user.postalcode}
                        />
                        <br></br>
                        <input
                            className={styles.input}
                            type="text"
                            placeholder={user.address}
                        />
                        <br></br>
                        <input
                            className={styles.input}
                            type="text"
                            placeholder={user.role}
                        />
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
