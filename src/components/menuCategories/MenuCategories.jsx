import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=transportation?topViews"
        className={`${styles.categoryItem} ${styles.transportation}`}>
        Transportation
      </Link>
      <Link 
        href="/blog?cat=recycling?topViews" 
        className={`${styles.categoryItem} ${styles.recycling}`}>
        Recycling
      </Link>
      <Link 
        href="/blog?cat=food?topViews" 
        className={`${styles.categoryItem} ${styles.food}`}>
        Food
      </Link>
      <Link 
        href="/blog?cat=energy?topViews" 
        className={`${styles.categoryItem} ${styles.energy}`}>
        Energy used
      </Link>
      <Link 
        href="/blog?cat=water?topViews" 
        className={`${styles.categoryItem} ${styles.water}`}>
        Water
      </Link>
      <Link 
        href="/blog?cat=others?topViews" 
        className={`${styles.categoryItem} ${styles.others}`}>
        Others
      </Link>
    </div>
  );
};

export default MenuCategories;
