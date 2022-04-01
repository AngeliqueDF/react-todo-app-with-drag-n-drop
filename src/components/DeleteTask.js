import React from 'react'
import SingleTask from './SingleTask';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const DeleteTask = ({
  tasks,
  filter,
  filterTasks,
  labelClick,
  deleteTask,
  updateStatus,
  reorderTasks
}) => {

  // generating valid HTML id value from the task's content
  const validId = (content, id) => content.toLowerCase().replace(/ /g, "-") + id;

  const handleDragEnd = (result) => {
    reorderTasks(result)
  }

  return (
    <form id="delete-checked-tasks-form"
      className="delete-checked-tasks-form">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable
          droppableId='tasks'
        >
          {(provided) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {tasks.map((e, index) =>
                <Draggable
                  key={e.id}
                  draggableId={`${e.id}`}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <SingleTask
                        filter={filter}
                        filterTasks={filterTasks}
                        id={e.id}
                        validId={validId(e.content, e.id)}
                        content={e.content}
                        complete={e.complete}
                        labelClick={labelClick}
                        deleteTask={deleteTask}
                        updateStatus={updateStatus}
                      />
                    </div>
                  )}
                </Draggable>
              )}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>

    </form >
  )
};

export default DeleteTask