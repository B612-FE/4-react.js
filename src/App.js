import React, { useState, useEffect } from "react";
import "./App.css";
import ToDoList from "./ToDoList";
import DoneList from "./DoneList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // 페이지 로드 시 localStorage에서 데이터 불러오기
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // tasks가 업데이트될 때마다 localStorage에 저장
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask, isDone: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter your to-do"
      />
      <button onClick={addTask}>+</button>
      <ToDoList tasks={tasks} onToggle={toggleTask} onRemove={removeTask} />
      <DoneList tasks={tasks} onToggle={toggleTask} onRemove={removeTask} />
    </div>
  );
}

export default App;
