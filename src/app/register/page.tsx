"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { serialize } from "v8";

/**
 * A component that returns HTML document upon the call
 * @returns 
 */
function Register() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => { // awaiting type declearation of `e`
        e.preventDefault();

        if (password !== confirmpassword) {
            setError("Password do not match!");
            return;
        }

        if (!name || !surname || !email || !password || !confirmpassword) {
            setError("Please complete all inputs!");
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });

            if (res.ok) {
                const form = e.target;
                setError("");
                setSuccess("User registration successfully!");
                form.reset();
            } else {
                console.log("User registration failed.");
            }
        } catch (error) {
            console.log("Error during registration: ", error);
        }
    };

    return (
        <>
            <div className={styles.container}>
                {" "}
                <h1 className={styles.SU}> Sign up </h1>
            </div>

            <Link href={"/login"}>
                <div className={styles.signup}>- Login</div>
            </Link>

            <div className={styles.container}>
                <div className={styles.frame}>
                    <div className={styles.container}>
                        <Image
                            src="/iooo.png"
                            width={150}
                            height={150}
                            alt="logo"
                        />
                    </div>

                    <div className={styles.Move}>
                        <div className={styles.container}>
                            <h1 className={styles.fon}>
                                {" "}
                                Let’s get to know you!{" "}
                            </h1>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit}>
                        {error && <div className={styles.error}>{error}</div>}

                        <div className={styles.frameinput}>
                            <div className={styles.Moveinput1}>
                                <div className={styles.nt}>
                                    <input
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        className={styles.input1}
                                        type="name"
                                        placeholder="Name"
                                    />
                                    <input
                                        onChange={(e) =>
                                            setSurname(e.target.value)
                                        }
                                        className={styles.input1}
                                        type="surname"
                                        placeholder="Surname"
                                    />
                                </div>
                            </div>

                            <div className={styles.frameinput2}>
                                <div className={styles.fip2}>
                                    <h5 className={styles.fontMonth}> </h5>
                                </div>

                                <div className={styles.Select}> test</div>
                            </div>

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
                                onChange={(e) =>
                                    setConfirmpassword(e.target.value)
                                }
                                className={styles.input}
                                type="password"
                                placeholder="Confirmpassword"
                            />

                            <button type="submit" className={styles.button}>
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
    );
}

export default Register;
