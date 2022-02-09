import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import AddTask from './components/AddTask';
import TasksInfo from './components/TasksInfo';
import DeleteTasks from './components/DeleteTasks';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([])

  const handleNewTaskSubmit = (event) => {
    event.preventDefault()

    const content = event.target.newTodo.value
    const newTaskId = Math.ceil(Math.random() * 100)

    // adding the new task to the state
    const newTasks = [...tasks].concat({ id: newTaskId, content })
    setTasks(newTasks)
  };




  return (
    <div>
      <Header />
      <main>
        <AddTask
          addTask={handleNewTaskSubmit}
        />

        {
          tasks.length === 0 ? null :
            <DeleteTasks
              tasks={tasks}
              labelClick={handleLabelClick}
              deleteTask={handleDeleteTask}
            />
        }

        <TasksInfo />
      </main>
    </div>
  );
}

export default App;
