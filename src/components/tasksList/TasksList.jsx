"use client"
import React, { useEffect, useState } from 'react';
import { useSession } from "next-auth/react";
import TaskCard from '../taskCard/TaskCard';
import styles from './TasksList.module.css';
import { GiEcology } from 'react-icons/gi'
import { FaCar, FaRecycle } from "react-icons/fa6";
import { MdEnergySavingsLeaf, MdFastfood, MdWaterDrop } from "react-icons/md";
import TaskCategories from '../taskCategories/TaskCategories';


const TasksList = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      fetch('/api/userTasks')
        .then(response => response.json())
        .then(data => {
          setTasks(data);
          setFilteredTasks(data);
        });
    }
  }, [session]);

  const handleFilter = (icon) => {
    if (icon) {
      const newFilteredTasks = tasks.filter(task => task.task.icon === icon);
      setFilteredTasks(newFilteredTasks);
    } else {
      setFilteredTasks(tasks); 
    }
  };

  return (
    <div className={styles.list}>
      <TaskCategories onFilter={handleFilter} />
      {filteredTasks.map((task) => (
        <TaskCard key={task.id} task={task.task} userTask={task}/>
      ))}
    </div>
  );
};

export default TasksList;