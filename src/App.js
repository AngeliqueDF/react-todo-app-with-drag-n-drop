import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import AddTask from './components/AddTask';
import TasksInfo from './components/TasksInfo';
import DeleteTasks from './components/DeleteTasks';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([])







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
