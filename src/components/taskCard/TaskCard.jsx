import React, { useState, useEffect } from 'react';
import styles from './taskCard.module.css';
import { GiEcology } from 'react-icons/gi'
import { FaCar, FaRecycle, FaRegCircleCheck } from "react-icons/fa6";
import { MdEnergySavingsLeaf, MdFastfood, MdWaterDrop } from "react-icons/md";
import { useSession } from "next-auth/react";
import prisma from '../../utils/connect';


const ICONS = {
  'FaCar': FaCar,
  'FaRecycle': FaRecycle,
  'GiEcology': GiEcology,
  'MdEnergySavingsLeaf': MdEnergySavingsLeaf,
  'MdFastfood': MdFastfood,
  'MdWaterDrop': MdWaterDrop,
};

const TaskCard = ({ task, userTask }) => {
  const Icon = ICONS[task.icon];
  

  const completeTask = async () => {
    try {
      const taskId = task.id;
      const response = await fetch(`/api/userTasks/${taskId}`, {
        method: 'PUT',
        body: JSON.stringify({ completed: true }),
      });
      console.log(response);
  
      if (!response.ok) {
        throw new Error('Error completing task');
      }
  
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.taskContainer}>
      <div className={styles.iconContainer}>
      <Icon />
      </div>
      <h2 className={styles.taskTitle}>{task.title}</h2>
      <p className={styles.taskDescription}>{task.desc}</p>
      <button 
        className={`${styles.toggleButton} ${userTask && userTask.completed ? styles.completed : ''}`}
        onClick={() => completeTask()}
      >
        <FaRegCircleCheck  />
      </button>
    </div>
  );
};

export default TaskCard;