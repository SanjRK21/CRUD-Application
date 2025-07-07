import "./App.css";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() === "") return;
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    }
    setTodoList([...todoList, task]);
    setNewTask("");
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTodoList(
      todoList.map((task) => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="App">
      <h1 className="app-header">To-Do List</h1>
      <div className="addTask">
        <input onChange={handleChange} value={newTask} placeholder="Add a new task..."/> 
        <button onClick={addTask}> Add Task</button>
      </div>
      <div classname="list">
        {todoList.map((task) => (
          <div key={task.id} className="list-item">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
            />
            <span className={`task-name ${task.completed ? "completed" : ""}`}>
              {task.taskName}
            </span>
            <button className="delete-btn" onClick={() => deleteTask(task.id)}>
              x
            </button>
          </div>
        ))}
      </div>
    </div>  
  );
}

export default App;

