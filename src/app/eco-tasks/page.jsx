"use client"

import React, { useState } from 'react';
import styles from "./ecoTasksPage.module.css"
import TasksList from '../../components/tasksList/TasksList'
import TaskCategories from '../../components/taskCategories/TaskCategories'

const ecoTasksPage = () => {
/*
  return (
    <div>
      <h1>Eco Tasks</h1>
      <TasksList />
    </div>
  )
}

export default ecoTasksPage