import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Button from './Button';

import './TaskDetails.css'

const TaskDetails = () => {
  const params = useParams();
  const history = useHistory();

  const handleBackButtonClick = () => {
    history.goBack();
  }

  return (
    <>
      <div className='back-button-container'>
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className='task-details-container'>
        <h2>{ params.taskTitle }</h2>
        <p>Lorem ipsum dolor sit, 
          amet consectetur adipisicing elit. Sit delectus cum 
          neque eos suscipit nobis aliquid incidunt nam ipsa id 
          hic beatae tempora quibusdam, odio blanditiis numquam dolore. 
          Illum, amet!</p>
      </div>
    </>
  )
}

export default TaskDetails;