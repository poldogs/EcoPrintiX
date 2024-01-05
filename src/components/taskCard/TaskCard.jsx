import React, { useState, useEffect } from 'react';
import styles from './taskCard.module.css';
import { GiEcology } from 'react-icons/gi'
import { FaCar, FaRecycle, FaRegCircleCheck } from "react-icons/fa6";
import { MdEnergySavingsLeaf, MdFastfood, MdWaterDrop } from "react-icons/md";
import { useSession } from "next-auth/react";


const ICONS = {
  'FaCar': FaCar,
  'FaRecycle': FaRecycle,
  'GiEcology': GiEcology,
  'MdEnergySavingsLeaf': MdEnergySavingsLeaf,
  'MdFastfood': MdFastfood,
  'MdWaterDrop': MdWaterDrop,
};

const TaskCard = ({ task, userTask }) => {
  const [isCompleted, setIsCompleted] = useState(userTask.completed);
  const Icon = ICONS[task.icon];
  const { status } = useSession();

  const completeTask = async (id) => {
  if (status === 'authenticated') {
    try {
      const res = await fetch(`https://ecoprintix.netlify.app/api/userTasks/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ completed: !isCompleted }),
      })
  
      if (res.ok) {
        const updatedTask = await res.json();
        setIsCompleted(updatedTask.completed);
        updateTask(updatedTask);
      }
      
    } catch (err) {
      console.log(err)
    }
  } else {
    console.log('Not authenticated');
  }
};

  return (
    <div className={`${styles.taskContainer} ${isCompleted ? styles.completed : ''}`}>
      <div className={styles.iconContainer}>
      <Icon />
      </div>
      <h2 className={styles.taskTitle}>{task.title}</h2>
      <p className={styles.taskDescription}>{task.desc}</p>
      <button 
        className={`${styles.toggleButton} ${isCompleted ? styles.completed : ''}`}
        onClick={() => completeTask(userTask.id)}
      >
        <FaRegCircleCheck  />
      </button>
    </div>
  );
};

export default TaskCard;