import React from 'react'
import SingleTask from './SingleTask';

const DeleteTask = ({
  tasks,
  labelClick,
  deleteTask,
  updateStatus
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
            updateStatus={updateStatus}
            complete={task.complete}
          />
        )}
      </ul>
    </form>
  )
};

export default DeleteTask