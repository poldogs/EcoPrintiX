import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
import { BsFacebook, BsInstagram, BsTiktok, BsYoutube } from "react-icons/bs";
import { IoFingerPrint } from "react-icons/io5";


const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
      <Link href="/"><BsFacebook fontSize={24}/></Link>
          <Link href="/"><BsInstagram fontSize={24}/></Link>
          <Link href="/"><BsTiktok fontSize={24}/></Link>
          <Link href="/"><BsYoutube fontSize={24}/></Link>
      </div>
      <div className={styles.logo}><IoFingerPrint color="#00FF00"/>EcoPrintix</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Homepage</Link>
        <Link href="/blog" className={styles.link}>Blog</Link>
        <Link href="/about" className={styles.link}>About</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
