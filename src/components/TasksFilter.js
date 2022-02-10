import React from "react";

const TasksFilter = ({
  tasks,
  filter,
  updateFilter
}) => {

  const handleFilterTasks = (event) => {
    const filterName = event.target.name
    updateFilter(filterName)
  }

  return (
    <div className="tasks-filter">
      <button
        onClick={handleFilterTasks}
        name="all"
        type="button"
      >
        All
      </button>

      <button
        onClick={handleFilterTasks}
        name="active"
        type="button"
      >
        Active
      </button>

      <button
        onClick={handleFilterTasks}
        name="completed"
        type="button"
      >
        Completed
      </button>
    </div>
  )
};

export default TasksFilter