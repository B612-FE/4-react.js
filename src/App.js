import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [listContainerData, setListContainerData] = useState([]);
  const [listDoneData, setListDoneData] = useState([]);

  const addTask = () => {
    if (inputValue === "") {
      alert("Write something!!");
    } else {
      setListContainerData([...listContainerData, inputValue]);
      setInputValue("");
    }
  };

  const moveToDone = (index) => {
    const task = listContainerData[index];
    setListDoneData([...listDoneData, task]);
    removeTask(index, false);
  };

  const moveToTodo = (index) => {
    const task = listDoneData[index];
    setListContainerData([...listContainerData, task]);
    removeTask(index, true);
  };

  const removeTask = (index, isDone) => {
    if (isDone) {
      const updatedDoneData = listDoneData.filter((_, i) => i !== index);
      setListDoneData(updatedDoneData);
    } else {
      const updatedContainerData = listContainerData.filter((_, i) => i !== index);
      setListContainerData(updatedContainerData);
    }
  };

  return (
    <div className="container">
      <div className="todo-app">
        <h2>
          <img src="images/haerin.png" alt="" />
          Things to do
        </h2>
        <div className="row">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter your to-do"
          />
          <button onClick={addTask}>+</button>
        </div>
        <p className="todo">
          <img src="images/danielle.png" alt="" />
          To do!
        </p>
        <ul className="list-container" id="list-container">
          {listContainerData.map((task, index) => (
            <li key={index}>
              
              <span className="del" onClick={() => removeTask(index, false)}>x</span>
              <span className="move" onClick={() => moveToDone(index)}>{task}</span>
            </li>
          ))}
        </ul>
        <p className="done">
          <img src="images/minji.png" alt="" />
          Done!
        </p>
        <ul className="list-container" id="list-done">
          {listDoneData.map((task, index) => (
            <li key={index}>
              <span className="donedel" onClick={() => removeTask(index, true)}>x</span>
              <span className="move" onClick={() => moveToTodo(index)}>{task}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
