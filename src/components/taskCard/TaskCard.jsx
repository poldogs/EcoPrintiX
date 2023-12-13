import React from 'react';
import Image from 'next/image';

const TaskCard = ({ task }) => {
  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.desc}</p>
      <Image src={task.img} alt={task.title} />
    </div>
  );
};

export default TaskCard;