"use client"
import React, { useEffect, useState } from 'react';
import { useSession } from "next-auth/react";
import TaskCard from '../taskCard/TaskCard';
import styles from './TasksList.module.css';


const TasksList = () => {
  const [tasks, setTasks] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      fetch('/api/userTasks')
        .then(response => response.json())
        .then(data => {
          setTasks(data); // Actualizando el estado tasks con las tareas del usuario
        });
    }
  }, [session]);

  return (
    <div className={styles.list}>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task.task} />
      ))}
    </div>
  );
};

export default TasksList;