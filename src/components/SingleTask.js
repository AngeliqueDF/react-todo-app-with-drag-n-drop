import React from 'react'

const SingleTask = ({
  id,
  content,
  labelClick,
  deleteTask,
  updateStatus
}) => {

  // generating a name attribute value from the task's content
  const nameAttribute = content.toLowerCase().replace(/ /g, "-")

  // generating an aria-label value
  const ariaLabelValue = `Delete the task "${content}"`

  const handleLabelClick = (event) => {
    const adjacentCheckbox = event.target.parentNode.childNodes[0]
    labelClick(adjacentCheckbox)
    updateStatus(id)
  };

  const handleDeleteClick = (event) => {
    deleteTask(id)
  };

  const handleCheckboxClick = (event) => {
    updateStatus(id)
  };

  return (
    <li className="single-task">

      {/* drag and drop events are attached to inputs */}
      <input type="checkbox" className="task-checkbox" name={nameAttribute} onClick={handleCheckboxClick} />

      {/* clicking on label checks the adjacent input */}
      <label htmlFor={nameAttribute} onClick={handleLabelClick}>
        {content}
      </label>

      <button
        aria-label={ariaLabelValue}
        type="button"
        className="delete-task"
        onClick={handleDeleteClick}>
      </button>
    </li>
  )
};

export default SingleTask