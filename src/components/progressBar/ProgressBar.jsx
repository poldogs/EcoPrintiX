import React from 'react';
import styles from './progressBar.module.css';

const ProgressBar = ({ completedTasks, totalTasks }) => {
  const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <div className={styles.progressBar}>
      <div key={progress} className={styles.progress} style={{ '--progress': `${progress}%` }} />
    </div>
  );
};

export default ProgressBar;