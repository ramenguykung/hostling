"use client";

import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../componants/Navbar";
import { useSession } from "next-auth/react";

export default function Login() {
    const { data: session } = useSession();

    return (
        <>
<Navbar session={session} />

<h2 className={styles.text}>Welcome back!</h2>
           
        </>
    );
}
