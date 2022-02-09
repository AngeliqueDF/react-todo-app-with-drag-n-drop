import React from 'react'

const AddTask = ({ addTask }) => {
  return (
    <form action="" className="new-task" onSubmit={addTask}>
      <div className="checkbox"></div>
      <input type="text" name='newTodo' placeholder="Create a new todo..." />
    </form>
  )
};

export default AddTask