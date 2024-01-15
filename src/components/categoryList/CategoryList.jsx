import React from 'react'
import styles from "./categoryList.module.css"
import Link from 'next/link'
import { GiEcology } from 'react-icons/gi'
import { FaCar, FaRecycle } from "react-icons/fa6";
import { MdEnergySavingsLeaf, MdFastfood, MdWaterDrop } from "react-icons/md";

const CategoryList = () => {
  return (
    <div className={styles.container}>
       <h1 className={styles.title}>Categories</h1>
       <div className={styles.categories}>
         
          <Link href="/blog?cat=transportation?topViews" 
          className={`${styles.category} ${styles.transportation}`}>
             <FaCar fontSize={32}/> Transportation
          </Link>

          <Link href={`/blog?cat=recycling?topViews`} 
          className={`${styles.category} ${styles.recycling}`}>
             <FaRecycle fontSize={32}/> Recycling
          </Link>

          <Link href={`/blog?cat=food?topViews`} 
          className={`${styles.category} ${styles.food}`}>
             <MdFastfood fontSize={32}/> Food
          </Link>

          <Link href={`/blog?cat=energy?topViews`} 
          className={`${styles.category} ${styles.energy}`}>
             <MdEnergySavingsLeaf fontSize={32}/> Energy used
          </Link>

          <Link href={`/blog?cat=water?topViews`} 
          className={`${styles.category} ${styles.water}`}>
             <MdWaterDrop fontSize={32}/> Water
          </Link>

          <Link href={`/blog?cat=others?topViews`} 
          className={`${styles.category} ${styles.others}`}>
             <GiEcology fontSize={32}/> Others
          </Link>
       </div>
    </div>
  )
}

export default CategoryList