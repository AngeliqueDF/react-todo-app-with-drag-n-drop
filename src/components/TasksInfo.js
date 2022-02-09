import React from 'react'

const TasksInfo = ({ tasks }) => {
  const checkedTasks = tasks.filter(e => e.complete === false).length
  return (
    <div className="tasks-state">

      <div className="tasks-info">
        <p className="tasks-count">
          {checkedTasks} items left
        </p>

        <button form="delete-checked-tasks-form" type="submit" className="clear-tasks">
          Clear Completed
        </button>
      </div>

      <div className="tasks-filter">
        <button type="button" className="filter-applied">All</button>
        <button type="button">Active</button>
        <button type="button">Completed</button>
      </div>

    </div>
  )
};

export default TasksInfo