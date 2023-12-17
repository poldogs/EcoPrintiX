"use client"

import React, { useState } from 'react';
import styles from "./ecoTasksPage.module.css"
import TasksList from '../../components/tasksList/TasksList'
import TaskCategories from '../../components/taskCategories/TaskCategories'

const ecoTasksPage = ({ userId }) => {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
  };

  return (
    <div>
      <h1>Eco Tasks</h1>
      <TaskCategories onIconClick={handleIconClick} />
      <TasksList userId={userId} selectedIcon={selectedIcon}/>
    </div>
  )
}

export default ecoTasksPage