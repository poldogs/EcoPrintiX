import React from 'react'
import styles from "./ecoTasksPage.module.css"
import TasksList from '../../components/tasksList/TasksList'

const ecoTasksPage = ({ userId }) => {
  return (
    <div>
      <h1>Eco Tasks</h1>
      <TasksList userId={userId} />
    </div>
  )
}

export default ecoTasksPage