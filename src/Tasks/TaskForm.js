import React from 'react';

function TaskForm(props) {
  return (
    <div>
      <label htmlFor="task-name">Task Name:</label>
      <input
        id="task-name"
        name="task-name"
        type="text"
        onChange={props.handleTaskNameChange}
      />

      <p>Adding new task named: {props.taskName}</p>
    </div>
  );
}

export default TaskForm;