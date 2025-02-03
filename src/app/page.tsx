"use client";
import { useSession } from "next-auth/react";
import styles from "./page.module.css";
import Navbar from "./componants/Navbar";

export default function Home() {
    const { data: session } = useSession();
    return (
        <>
            <Navbar session={session} />

            <div className={styles.container}>
                <h1 className={styles.text}>หอพัก91</h1>
            </div>
        </>
    );
}
