import React from 'react';
import TaskCard from './TaskCard';
import styles from './TasksList.module.css';

const TasksList = ({ tasks }) => {
  return (
    <div className={styles.list}>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TasksList;