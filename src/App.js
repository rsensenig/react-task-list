import React, { useState } from 'react';
import TaskForm from './Tasks/TaskForm';
import TaskItem from './Tasks/TaskItem';

const tasks = [
  {
    id: 1,
    name: "Learn React",
    status: "ACTIVE"
  },
  {
    id: 2,
    name: "Apply to jobs",
    status: "ACTIVE"
  },
  {
    id: 3,
    name: "Get an offer",
    status: "ACTIVE"
  }
];

function App() {
  const [taskName, setTaskName] = useState("");

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  }

  return (
    <div className="App">
      <h1>Task List</h1>

      <TaskForm
        taskName={taskName}
        handleTaskNameChange={handleTaskNameChange}
      />

      <hr />

      <TaskItem tasks={tasks} />
    </div>
  );
}

export default App;
