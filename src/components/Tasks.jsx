import React from 'react';
import Task from './Task';

const Tasks = ({ tasks, handleTaskClick, handleTaskdDeletion}) => {
  return (
    <>
      {tasks.map((task) => (
        <Task task={task} handleTaskClick={handleTaskClick}
        handleTaskdDeletion={handleTaskdDeletion} />
      ))}
    </>
  )
};

export default Tasks;