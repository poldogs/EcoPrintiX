import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsTiktok, BsYoutube } from "react-icons/bs";
import { IoFingerPrint } from "react-icons/io5";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <IoFingerPrint color="#00FF00" alt="EcoPrintix" fontSize={50}/>
          <h1 className={styles.logoText}>EcoPrintix</h1>
        </div>
        <p className={styles.desc}>
          EcoPrintix is your gateway to a world of eco-friendly actions, inspiring positive change for our planet.
          <br/>Our mission is to inspire and empower people to make sustainable choices in their everyday lives. 
          We believe that everyone has a role to play in protecting the planet, and we are committed to making it 
          easy for people to take action.
        </p>
        <div className={styles.icons}>
          <Link href="/"><BsFacebook fontSize={18}/></Link>
          <Link href="/"><BsInstagram fontSize={18}/></Link>
          <Link href="/"><BsTiktok fontSize={18}/></Link>
          <Link href="/"><BsYoutube fontSize={18}/></Link>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/blog?cat=transportation">Transportation</Link>
          <Link href="/blog?cat=recycling">Recycling</Link>
          <Link href="/blog?cat=food">Food</Link>
          <Link href="/blog?cat=energy">Energy used</Link>
          <Link href="/blog?cat=water">Water</Link>
          <Link href="/blog?cat=others">Others</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
