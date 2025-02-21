"use client";

import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useRouter, redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const router = useRouter();
    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const { data: session } = useSession();
    // if (session) router.replace('/');

    useEffect(() => {
        if (session) {
            router.replace("/");
        }
    }, [session]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError("Please fill in all blanks!");
            return;
        }

        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (res.error) {
                setError("Invalid credentials");
                return;
            }

            router.replace("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className={styles.Frame4}>
                <div className={styles.Frame3}>
                    <div className={styles.login}>
                        <h2 className={styles.text}>Welcome back!</h2>

                        <Link href={"/"}>
                                          
  
                                            <button    className={styles.buttonIconLeft}>     
           <Image src ="/IconLeft.png" width={20}  height={20} alt="logo" /> 
              </button> 
                                         
                                            </Link> 

                        <div className={styles.container}>
                            <Image  
                                src="/LogoBC.png"
                                width={120}
                                height={120}
                                alt="logo"
                            />
                        </div>
                        <br></br>
                        <br></br>

                        <form onSubmit={handleSubmit}>
                            {error && (
                                <div className={styles.error}>{error}</div>
                            )}

                            <div className={styles.ipg1}>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={styles.input}
                                    className={styles.input}
                                    type="Email"
                                    placeholder="Email"
                                />

                                <input
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    className={styles.input}
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                />
                                    <div  className={styles.MovetoggleButton}>
                                <div
                                                type="button"
                                                onClick={togglePasswordVisibility}
                                                className={styles.toggleButton}
                                            >

                                                {showPassword ?   <Image src ="/EyeClosed.png" width={20}  height={20} alt="logo" /> :   <Image src ="/EyeOpen.png" width={20}  height={20} alt="logo" /> }

                                            </div>
                                            </div>


                            </div>
                            <br></br>
                            <br></br>

                            <button type="submit" className={styles.button}>
                                <h6 className={styles.fontLogin}>Login</h6>
                            </button>
                        </form>
                        <br></br>

                        <div className={styles.nt}>
                            <Link href={"/Forgotpassword"}>
                                <div className={styles.fp}>
                                    Forgot password?
                                </div>
                            </Link>

                            <div className={styles.space}></div>

                            <Link href={"/register"}>
                                <div className={styles.su}>Sign up</div>
                            </Link>
                        </div>
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
