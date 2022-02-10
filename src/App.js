import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';
import TasksInfo from './components/TasksInfo';
import DeleteTask from './components/DeleteTask';
import { useEffect, useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks')
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, [])

  const handleToggleTheme = () => {
    document.body.classList.toggle('dark')
  };

  const handleNewTaskSubmit = (event) => {
    event.preventDefault()

    const content = event.target.newTodo.value
    const newTaskId = Math.ceil(Math.random() * 1000)

    // adding the new task to the state
    const newTasks = [...tasks].concat({ id: newTaskId, content, complete: false })
    setTasks(newTasks)
    localStorage.setItem('tasks', JSON.stringify(newTasks))
  };

  // toggling the adjacent checkbox when the label element of a task is clicked
  const handleLabelClick = (checkbox) => {
    const isChecked = checkbox.checked
    checkbox.checked = !isChecked
  };

  const handleCheckboxClick = (checkbox) => {
    // toggle the task's 'complete' value in the state
    const newTasks = tasks.map(e => e.id === checkbox ? { ...e, complete: !e.complete } : e)

    setTasks(newTasks)
    localStorage.setItem('tasks', JSON.stringify(newTasks))
  };

  // handles deleting a task with its .delete-task button
  const handleDeleteTask = (id) => {
    const newTasks = tasks.filter(e => e.id !== id)
    setTasks(newTasks)
    localStorage.setItem('tasks', JSON.stringify(newTasks))
  };

  const handleClearCompleted = () => {
    const newTasks = tasks.filter(e => e.complete === false)
    setTasks(newTasks)
    localStorage.setItem('tasks', JSON.stringify(newTasks))
  };

  return (
    <div>
      <Header
        toggleTheme={handleToggleTheme}
      />
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

        <TasksInfo
          tasks={tasks}
          clearCompleted={handleClearCompleted}
        />
      </main>
    </div>
  );
}

export default App;
