"use client"
import { GiEcology } from 'react-icons/gi'
import { FaCar, FaRecycle } from "react-icons/fa6";
import { MdEnergySavingsLeaf, MdFastfood, MdWaterDrop } from "react-icons/md";
import styles from './taskCategories.module.css';
import React, { useState } from 'react';

const TaskCategories = ({ onFilter }) => {

    const handleIconClick = (icon) => {
        onFilter(icon);
      };

    return (
        <div className={styles.categories}>
        <button onClick={() => handleIconClick('FaCar')} className={`${styles.category} ${styles.transportation}`}>
            <FaCar fontSize={32}/>
        </button>
        <button onClick={() => handleIconClick('FaRecycle')} className={`${styles.category} ${styles.recycling}`}>
            <FaRecycle fontSize={32}/>
        </button>
        <button onClick={() => handleIconClick('MdFastfood')} className={`${styles.category} ${styles.food}`}>
            <MdFastfood fontSize={32}/>
        </button>
        <button onClick={() => handleIconClick('MdEnergySavingsLeaf')} className={`${styles.category} ${styles.energy}`}>
            <MdEnergySavingsLeaf fontSize={32}/>
        </button>
        <button onClick={() => handleIconClick('MdWaterDrop')} className={`${styles.category} ${styles.water}`}>
            <MdWaterDrop fontSize={32}/>
        </button>
        <button onClick={() => handleIconClick('GiEcology')} className={`${styles.category} ${styles.others}`}>
            <GiEcology fontSize={32}/>
        </button>
        </div>
    );
}

export default TaskCategories;