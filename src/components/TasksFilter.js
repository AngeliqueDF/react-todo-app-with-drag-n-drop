import React from "react";

const TasksFilter = ({
  tasks,
}) => {
  return (
    <div className="tasks-filter">
      <button
      >
        All
      </button>

      <button
      >
        Active
      </button>

      <button
      >
        Completed
      </button>
    </div>
  )
};

export default TasksFilter