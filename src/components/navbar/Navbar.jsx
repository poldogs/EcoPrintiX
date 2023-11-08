import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
import { BsFacebook, BsInstagram, BsTiktok, BsYoutube } from "react-icons/bs";
import { GiEcology } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <BsFacebook fontSize={24}/>
        <BsInstagram fontSize={24}/>
        <BsTiktok fontSize={24}/>
        <BsYoutube fontSize={24}/>
      </div>
      <div className={styles.logo}><GiEcology/>EcoPrintix</div>
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
