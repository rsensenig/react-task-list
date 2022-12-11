import React from 'react';

function TaskItem(props) {
  return (
    props.tasks.map(task => (
      <ul key={task.id}>
        <li>Name: {task.name}</li>
        <li>Status: {task.status}</li>
      </ul>
    ))
  );
}

export default TaskItem;