import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=transportation"
        className={`${styles.categoryItem} ${styles.transportation}`}>
        Transportation
      </Link>
      <Link 
        href="/blog?cat=recycling" 
        className={`${styles.categoryItem} ${styles.recycling}`}>
        Recycling
      </Link>
      <Link 
        href="/blog?cat=food" 
        className={`${styles.categoryItem} ${styles.food}`}>
        Food
      </Link>
      <Link 
        href="/blog?cat=energy" 
        className={`${styles.categoryItem} ${styles.energy}`}>
        Energy used
      </Link>
      <Link 
        href="/blog?cat=water" 
        className={`${styles.categoryItem} ${styles.water}`}>
        Water
      </Link>
      <Link 
        href="/blog?cat=others" 
        className={`${styles.categoryItem} ${styles.others}`}>
        Others
      </Link>
    </div>
  );
};

export default MenuCategories;
