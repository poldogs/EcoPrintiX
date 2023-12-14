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
  const [currentUserTask, setCurrentUserTask] = useState(null);

  useEffect(() => {
    const fetchUserTasks = async () => {
      try {
        const response = await fetch('/api/userTasks');
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error);
        }

        // Assuming the API returns an array of tasks, find the one with the same ID as the current task
        const userTaskForThisCard = data.find(userTask => userTask.taskId === task.id);
        setCurrentUserTask(userTaskForThisCard);
      } catch (error) {
        console.error('An error occurred while fetching user tasks:', error);
      }
    };

    fetchUserTasks();
  }, [task.id]);

  const completeTask = async (task) => {
    try {
      // Ignore the returned value if you don't need it
      await axios.put(`/api/userTasks`, task);
  
      toast.success("Task updated");
      allTasks();
    } catch (error) {
      console.log(error);
      console.error("Something went wrong:", error.message);
    }
  };

  return (
    <div className={styles.taskContainer}>
      <div className={styles.iconContainer}>
      <Icon />
      </div>
      <h2 className={styles.taskTitle}>{task.title}</h2>
      <p className={styles.taskDescription}>{task.desc}</p>
      <button 
        className={`${styles.toggleButton} ${userTask && userTask.completed ? styles.completed : ''}`}
        onClick={() => completeTask(task)}
      >
        <FaRegCircleCheck  />
      </button>
    </div>
  );
};

export default TaskCard;