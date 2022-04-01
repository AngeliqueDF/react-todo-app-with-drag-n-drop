import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TasksInfo from "./components/TasksInfo";
import DeleteTask from "./components/DeleteTask";
import { useEffect, useState } from "react";

function App() {
	const [tasks, setTasks] = useState([
		{
			id: 0,
			complete: true,
			content: "Complete online JavaScript course",
		},
		{
			id: 1,
			complete: false,
			content: "Jog around the park 3x",
		},
		{
			id: 2,
			complete: false,
			content: "10 minutes meditation",
		},
		{
			id: 3,
			complete: false,
			content: "Read for 1 hour",
		},
		{
			id: 4,
			complete: false,
			content: "Pick up groceries",
		},
		{
			id: 5,
			complete: false,
			content: "Complete Todo App on Frontend Mentor",
		},
	]);
	const [filter, setFilter] = useState("all");

	useEffect(() => {
		const storedTasks = localStorage.getItem("tasks");
		if (storedTasks) {
			setTasks(JSON.parse(storedTasks));
		}
	}, []);

	const handleFilter = (filter) => {
		setFilter(filter);
	};

	const handleToggleTheme = () => {
		document.body.classList.toggle("dark");
	};

	const handleNewTaskSubmit = (event) => {
		event.preventDefault();

		const content = event.target.newTodo.value;
		event.target.newTodo.value = "";
		const newTaskId = Math.ceil(Math.random() * 1000);

		// adding the new task to the state
		const newTasks = [...tasks].concat({
			id: newTaskId,
			content,
			complete: false,
		});
		setTasks(newTasks);
		localStorage.setItem("tasks", JSON.stringify(newTasks));
	};

	// toggling the adjacent checkbox when the label element of a task is clicked
	const handleLabelClick = (adjacentCheckbox) => {
		const isChecked = adjacentCheckbox.checked;
		adjacentCheckbox.checked = !isChecked;
	};

	// this event handler is triggered when the checked property changes due to a click on the task's checkbox or label
	const handleCheckboxChange = (checkboxId) => {
		// toggle the task's 'complete' value in the state
		const newTasks = tasks.map((e) =>
			e.id === checkboxId ? { ...e, complete: !e.complete } : e
		);
		setTasks(newTasks);
		localStorage.setItem("tasks", JSON.stringify(newTasks));
	};

	// handles deleting a task with its .delete-task button
	const handleDeleteTask = (id) => {
		const newTasks = tasks.filter((e) => e.id !== id);
		setTasks(newTasks);
		localStorage.setItem("tasks", JSON.stringify(newTasks));
	};

	const handleClearCompleted = () => {
		const newTasks = tasks.filter((e) => e.complete === false);
		setTasks(newTasks);
		localStorage.setItem("tasks", JSON.stringify(newTasks));
	};

	return (
		<div>
			<Header toggleTheme={handleToggleTheme} />
			<main>
				<AddTask addTask={handleNewTaskSubmit} />

				{tasks.length === 0 ? null : (
					<DeleteTask
						tasks={tasks}
						filter={filter}
						labelClick={handleLabelClick}
						deleteTask={handleDeleteTask}
						updateStatus={handleCheckboxChange}
					/>
				)}

				<TasksInfo
					tasks={tasks}
					filter={filter}
					updateFilter={handleFilter}
					clearCompleted={handleClearCompleted}
				/>
			</main>
		</div>
	);
}

export default App;
