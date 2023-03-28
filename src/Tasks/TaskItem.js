import React from 'react';

function TaskItem(props) {
// CSS styling
const editButtonStyle = {
  backgroundColor: "red",
  border: "none",
  color: "white",
  padding: 10,
  textAlign: "center",
  fontSize: 16,
  display: "block"
}
  
  return (
    props.tasks.map(task => (
      <ul key={task.id}>
        <li>Name: {task.name}</li>
        <li>Status: {task.status}</li>
        <li><button type="button" onClick={() => props.handleTaskDelete(task.id)} style={editButtonStyle}>Delete</button></li>
      </ul>
    ))
  );
}

export default TaskItem;