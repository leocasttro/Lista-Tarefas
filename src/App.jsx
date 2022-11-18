import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Header from './components/Header';
import TaskDetails from './components/TaskDetails';

import './App.css';



const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar programação',
      completed: false,
    }, 
    {
      id: '2',
      title: 'Ler livros',
      completed: true
    },
  ]); //state em react (dinâmico)

  useEffect(() => {
    const fetchTasks = async () => {
      const {data} = await axios.get(
        'https://jsonplaceholder.cypress.io/todos?_limit=10'
        );

        setTasks(data);
    }
    fetchTasks();
  }, [])

  const handleTaskClick = (taskId) => {  //função altera o completed das tasks
    const newTasks = tasks.map(task => {
      if (task.id === taskId) return { ...task, completed: !task.completed }

      return task;
    });

    setTasks(newTasks)
  }

  const handleTaskAddition = (taskTitle) => {  //adiciona uma nova task 
    if (taskTitle !== '') {
      const newTasks = [...tasks, {
        title: taskTitle,
        id: Math.random(10),
        completed: false,
        },
      ];
  
      setTasks(newTasks)
    };
  }

  const handleTaskdDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId)

    setTasks(newTasks);
  }

  return (
    <Router>
        <div className='container'>
          <Header />
          <Route 
            path='/'
            exact
            render={() => (
              <>
                <AddTask handleTaskAddition={handleTaskAddition}/>
                <Tasks 
                  tasks={tasks} 
                  handleTaskClick={handleTaskClick}
                  handleTaskdDeletion={handleTaskdDeletion}
                />
              </>
            )}
          />
          <Route path='/:taskTitle' exact component={TaskDetails}/>
        </div>
    </Router>

  );
}

export default App;