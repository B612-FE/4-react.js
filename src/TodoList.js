import React, { useState, useRef, useEffect } from "react";
import "./TodoList.css";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [doneItems, setDoneItems] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    loadTodoList();
  }, []);

  const handleSubmit = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addTodoItem();
    }
  };

  const addTodoItem = () => {
    const value = inputRef.current.value;

    if (value) {
      inputRef.current.value = "";
      setTodos([...todos, { text: value, done: false }]);
      saveTodoList([...todos, { text: value, done: false }], doneItems);
    } else {
      alert("내용을 입력해 주세요");
    }
  };

  const toggleDone = (item, index) => {
    if (item.done) {
      const updatedDoneItems = doneItems.filter((_, i) => i !== index);
      setDoneItems(updatedDoneItems);
      setTodos([...todos, { ...item, done: false }]);
    } else {
      const updatedTodos = todos.filter((_, i) => i !== index);
      setTodos(updatedTodos);
      setDoneItems([...doneItems, { ...item, done: true }]);
    }
    saveTodoList(todos, doneItems);
  };

  const removeTodoItem = (item, index, isDone) => {
    if (isDone) {
      const updatedDoneItems = doneItems.filter((_, i) => i !== index);
      setDoneItems(updatedDoneItems);
    } else {
      const updatedTodos = todos.filter((_, i) => i !== index);
      setTodos(updatedTodos);
    }
    saveTodoList(todos, doneItems);
  };

  const saveTodoList = (allTodos, allDoneItems) => {
    localStorage.setItem(
      "todos",
      JSON.stringify([...allTodos, ...allDoneItems])
    );
  };

  const loadTodoList = () => {
    const loadedTodos = localStorage.getItem("todos");
    if (loadedTodos !== null) {
      const todos = JSON.parse(loadedTodos);
      setTodos(todos.filter((todo) => !todo.done));
      setDoneItems(todos.filter((todo) => todo.done));
    }
  };

  return (
    <div className="container">
      <div className="todo_title">
        <h1>TODO LIST</h1>
      </div>
      <div className="todo_body">
        <input
          type="text"
          className="todo_input"
          placeholder="𖤐 ⋆ ࣪ . ( what2do ) 🫧 ゛"
          onKeyPress={handleSubmit}
          ref={inputRef}
        />
      </div>
      <ul className="todo_list">
        {todos.map((item, index) => (
          <li key={index}>
            <button
              onClick={() => toggleDone(item, index)}
              style={{
                backgroundImage: item.done
                  ? "url('src/img/1.png')"
                  : "url('src/img/2.png')",
              }}></button>
            <span>{item.text}</span>
            <button
              className="delete_button"
              onClick={() => removeTodoItem(item, index, false)}>
              x
            </button>
          </li>
        ))}
      </ul>
      <ul className="todo_done">
        {doneItems.map((item, index) => (
          <li key={index}>
            <button
              onClick={() => toggleDone(item, index)}
              style={{
                backgroundImage: item.done
                  ? "url('src/img/1.png')"
                  : "url('src/img/2.png')",
              }}></button>
            <span className={item.done ? "done" : ""}>{item.text}</span>
            <button
              className="delete_button"
              onClick={() => removeTodoItem(item, index, true)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
