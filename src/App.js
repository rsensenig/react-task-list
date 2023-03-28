import React, { useState, useEffect } from 'react';
// import TaskForm from './Tasks/TaskForm';
import TaskItem from './Tasks/TaskItem';
import InputField from './shared/InputField'

// const initialTasks = [
//   {
//     id: 1,
//     name: "Learn React",
//     status: "ACTIVE"
//   },
//   {
//     id: 2,
//     name: "Apply to jobs",
//     status: "ACTIVE"
//   },
//   {
//     id: 3,
//     name: "Get an offer",
//     status: "ACTIVE"
//   }
// ];

// from Clockify
const CLOCKIFY_BASE_URL = 'https://api.clockify.me/api/v1'
const WORKSPACE_ID = '641b901750f86e7cac772f7b'
const PROJECT_ID='641b94b150f86e7cac77580e'

function App() {
  // useState for tasks, initialize as an empty array
  const [tasks, setTasks] = useState([]);

  // const [getter, setter] = useState(initialValue);
  const [taskName, setTaskName] = useState("");

  // useState for isLoading, initialize to false
  const [isLoading, setIsLoading] = useState(false);

  // useState for errorMessage, initialize to an empty string
  const [errorMessage, setErrorMessage] = useState("");

  const apiTaskUrl = `${CLOCKIFY_BASE_URL}/workspaces/${WORKSPACE_ID}/projects/${PROJECT_ID}/tasks`;

  // WARNING: DO NOT PASTE YOUR ACTUAL API KEY DIRECTLY INTO YOUR JS FILES IN A REAL-WORLD PROJECT. THIS IS FOR PRACTICE ONLY.
  const apiHeaders = {
    "Content-Type": "application/json",
    "x-api-key": "MTg3Y2U1ZjEtYmJkNy00NDZkLWI4YzgtNTlhMDdiMDU3Yzhl"
  }

  // create getAsyncTasks
  // const getAsyncTasks = () => {
  //   // return a new promise
  //   return new Promise(resolve => {
  //     // create a setTimeout to resolve the data after 5 seconds
  //     setTimeout(() => resolve({data: initialTasks}), 5000)
  //   })
  // }

  // if taskName is updated
  // save the task name to the browser
  useEffect(() => {
    localStorage.setItem("workspaceId:", "WORKSPACE_ID");
  }, [taskName]);

  // useEffect for fetch API
  useEffect(() => {
    // make setIsLoading set to true
    setIsLoading(true);

  //   // make the promise
  //   getAsyncTasks()
  //     // then, if it's resolved, show the data via setTasks and setLoading to false because the data is loaded
  //     .then(res => {
  //       setTasks(res.data);
  //       setIsLoading(false);
  //     })
  //     // catch --> send an error message
  //     .catch((
  //       err => setErrorMessage(err.response.data.error)
  //     ))
  // })

  fetch(apiTaskUrl, { headers: apiHeaders })
    .then(response => response.json())
    .then(result => {
      setTasks(result);
      setIsLoading(false);
    })
    .catch(err => setErrorMessage(err.response.data.error))

  }, []);

  // end ALL useEffect hooks

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  }

  const handleUserNameChange = () => {
    console.log("Username Here");
  }

  // create handleTaskDelete with a promise of taskID
  const handleTaskDelete = (taskId) => {
    // create a variable newTasks --> target the task state --> filter through the tasks via the task id
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  const userName = "Rachel";

  // CSS styling
  const headingStyle = {
    color: "purple",
    fontSize: 36
  }

  return (
    <div className="App">
      <h1 style={headingStyle}>Task List</h1>

      {/* <TaskForm
        taskName={taskName}
        handleTaskNameChange={handleTaskNameChange}
      /> */}

      <InputField 
        id="task-name"
        type="text"
        value={taskName}
        onChangeFunction={handleTaskNameChange}
        isFocused
      >
        Task Name: This is a child
      </InputField>

      <InputField 
        id="user-name"
        type="text"
        value={userName}
        onChangeFunction={handleUserNameChange}
      >
        User Name: This is a 2nd child
      </InputField>

      <hr />

      {/* SHORT CIRCUITING using errorMessage */}
      {errorMessage && <p>Something went wrong: {errorMessage}</p>}

      {/* TERTIARY OPERATOR for loading State, isLoading */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TaskItem tasks={tasks} handleTaskDelete={handleTaskDelete} />
      )}

    </div>
  );
}

export default App;
