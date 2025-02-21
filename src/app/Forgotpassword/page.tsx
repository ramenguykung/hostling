"use client";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { redirect , useRouter} from 'next/navigation'


export default function Home() {
    const router = useRouter();
    const [erroremail, setErroemailr] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const { data: session, status: sessionStatus } = useSession();

   

    const handleSubmit = async (e) => {
        e.preventDefault();

        // if ( !email ) {
        //   setError("Please complete all inputs!");
        //   return;
        //   }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            setErroemailr(
                "Please enter a valid email address (e.g. user@example.com)"
            );
            return;
        }





        try {
            const res = await fetch("/api/Forget-password", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email,
               
              }),
            });
            if (res.status === 400) {
              setError("User with this email is not registered.");
            }
            if (res.status === 200) {
              setError("");
            //   router.push("/login");
            }
          } catch (error) {
            setError("Error, try again");
            console.log(error);
          }








    };

    return (
        <>
            <div className={styles.Frame4}>
                <div className={styles.Frame3}>
                    <div className={styles.login}>
                        <div className={styles.textmo}>
                            <h2 className={styles.text}>Aw Snap,</h2>
                        </div>

                        <h2 className={styles.text}>forgot password?</h2>

                        <h2 className={styles.textcontent}>
                            Don’t worry. We’ve got you covered!
                        </h2>
                        <br></br>
                        <br></br>

                        <form onSubmit={handleSubmit}>
                            {erroremail && (
                                <div className={styles.error1}>
                                    {erroremail}
                                </div>
                            )}

                            {error && (
                                <div className={styles.error1}>
                                    {error}
                                </div>
                            )}

                            <div className={styles.ipg1}>
                                <input
                                    id="emailInput"
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={styles.input}
                                    type="email"
                                    placeholder="Email"
                                    required
                                />

                                <button type="submit" className={styles.button}>
                                    <h6 className={styles.fontLogin}>
                                        Reset Password
                                    </h6>
                                </button>
                                {/* <p className="text-red-600 text-[16px] mb-4">{error && error}</p> */}
                            </div>
                        </form>

                        <div className={styles.o}>
                            <div className={styles.nt}>
                                <h4 className={styles.textAm}>
                                    {" "}
                                    Already a member?{" "}
                                </h4>

                                <Link href={"/login"}>
                                    <h4 className={styles.textLogin}>
                                        {" "}
                                        Login{" "}
                                    </h4>
                                </Link>
                            </div>
                        </div>

                        <br></br>
                    </div>

                    <div className={styles.logologin}>
                        <Image
                            src="/ตัดกรอบ.png"
                            width={550}
                            height={500}
                            alt="logo"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
