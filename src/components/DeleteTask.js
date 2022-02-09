import React from 'react'

import SingleTask from './SingleTask';

const DeleteTask = ({
  tasks,
  labelClick,
  deleteTask
}) => {
  return (
    <form id="delete-checked-tasks-form"
      className="delete-checked-tasks-form">
      <ul>
        {tasks.map(task =>
          <SingleTask
            key={task.id}
            id={task.id}
            content={task.content}
            labelClick={labelClick}
            deleteTask={deleteTask}
          />
        )}
      </ul>
    </form>
  )
};

export default DeleteTask