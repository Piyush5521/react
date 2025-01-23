import React, { useState } from "react";
import "./TodoList.css";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if(newTask.trim() !== ""){
        setTasks([...tasks, newTask]);
        setNewTask(""); 
    }

  }

  function removeTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function moveTaskUp(index) {
    if(index > 0) {
    const updatedTask = [...tasks];
    [updatedTask[index], updatedTask[index-1]] = [updatedTask[index-1], updatedTask[index]];
    setTasks(updatedTask);
    }
  }

  function moveTaskDown(index) {
    if(index < tasks.length - 1) {
        const updatedTask = [...tasks];
        [updatedTask[index], updatedTask[index+1]] = [updatedTask[index+1], updatedTask[index]];
        setTasks(updatedTask);
    }
  }

  return (
    <div>
      <h1>To-Do-List</h1>

      <input
        type="text"
        className="AddTaskInputField"
        id="taskInput"
        placeholder="Enter a Task..."
        value={newTask}
        onChange={handleInputChange}
      />
      <button className="add-button" onClick={addTask}>
        Add
      </button>

      
      <div className="container">
         <ul>
        {tasks.map((item, index) => (
          <li key={index}>

                <div className="row">
                    <div className="col">
                    {item} &nbsp;
                    </div>
                    <div className="col2">
                    <button className="DeleteButton" onClick={() => removeTask(index)}>
                            Delete
                        </button>
                        <button className="move-button" onClick={() => moveTaskUp(index)}>
                            <i class="fa fa-arrow-circle-up" style={{ fontSize: "24px" }}></i>
                            </button>{" "}
                            &nbsp;
                            <button className="move-button" onClick={() => moveTaskDown(index)}>
                            <i
                                class="fa fa-arrow-circle-down"
                                style={{ fontSize: "24px" }}
                            ></i>
                        </button>
                    </div>
                </div>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default TodoList;
