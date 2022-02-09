import './App.css';

import Header from './components/Header';
import AddTask from './components/AddTask';
import TasksInfo from './components/TasksInfo';
import DeleteTask from './components/DeleteTask';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([])

  const handleNewTaskSubmit = (event) => {
    event.preventDefault()

    const content = event.target.newTodo.value
    const newTaskId = Math.ceil(Math.random() * 1000)

    // adding the new task to the state
    const newTasks = [...tasks].concat({ id: newTaskId, content, complete: false })
    setTasks(newTasks)
  };

  // toggling the adjacent checkbox when the label element of a task is clicked
  const handleLabelClick = (checkbox) => {
    const isChecked = checkbox.checked
    checkbox.checked = !isChecked
  };

  const handleCheckboxClick = (checkbox) => {
    // toggle the task's 'complete' value in the state
    const newState = tasks.map(e => e.id === checkbox ? { ...e, complete: !e.complete } : e)

    setTasks(newState)
  };

  // handles deleting a task with its .delete-task button
  const handleDeleteTask = (id) => {
    const newTasks = tasks.filter(e => e.id !== id)
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
            <DeleteTask
              tasks={tasks}
              labelClick={handleLabelClick}
              deleteTask={handleDeleteTask}
              updateStatus={handleCheckboxClick}
            />
        }

        <TasksInfo />
      </main>
    </div>
  );
}

export default App;
