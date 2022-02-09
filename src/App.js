import logo from './logo.svg';
import './App.css';

const Header = () => {
  return (
    <header>
      <div>
        <h1>Todo</h1>
        <button type="button" class="toggle-dark-theme" aria-label="Change theme">
        </button>
      </div>
    </header>
  )
};

const AddTask = () => {

  return (
    <form action="" class="new-task">
      <div class="checkbox"></div>
      <input type="text" placeholder="Create a new todo..." />
    </form>
  )
};

const DeleteTasks = () => {

  return (
    <form id="delete-checked-tasks-form" action="" class="delete-checked-tasks-form">
      <ul>

        <li class="single-task">

          {/* drag and drop events are attached to inputs */}
          <input type="checkbox" class="task-checkbox" name="" />

          {/* clicking on label checks the adjacent input */}
          <label for="">
            Complete online JavaScript course
          </label>

          <button type="button" class="delete-task"></button>
        </li>
      </ul>
    </form>
  )
};

const TasksInfo = () => {
  return (
    <div class="tasks-state">

      <div class="tasks-info">
        <p class="tasks-count">
          {/* <!-- Add dynamic number -->  */} 2 items left
        </p>

        <button form="delete-checked-tasks-form" type="submit" class="clear-tasks">
          Clear Completed
        </button>
      </div>

      <div class="tasks-filter">
        <button type="button" class="filter-applied">All</button>
        <button type="button">Active</button>
        <button type="button">Completed</button>
      </div>

    </div>
  )
};

function App() {
  return (
    <>
      <body className="App">
        <Header />
        <main>
          <AddTask />
          <DeleteTasks />
          <TasksInfo />
        </main>
      </body>
    </>
  );
}

export default App;
