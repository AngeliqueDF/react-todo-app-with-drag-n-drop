import React from 'react'
import SingleTask from './SingleTask';

const DeleteTask = ({
  tasks,
  filter,
  labelClick,
  deleteTask,
  updateStatus
}) => {

  // generating valid HTML id value from the task's content
  const validId = (content, id) => content.toLowerCase().replace(/ /g, "-") + id;

  let tasksDisplayed = tasks

  if (filter === "completed") {
    tasksDisplayed = tasks.filter(e => e.complete === true)
  } else if (filter === "active") {
    tasksDisplayed = tasks.filter(e => e.complete === false)
  }

  return (
    <form id="delete-checked-tasks-form"
      className="delete-checked-tasks-form">
      <ul>
        {tasksDisplayed.map(task =>
          <SingleTask
            key={task.id}
            id={task.id}
            validId={validId(task.content, task.id)}
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