import React, { useState, useRef, useEffect, useCallback } from "react";
import "./TodoList.css";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [doneItems, setDoneItems] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    loadTodoList();
  }, []);

  const addTodoItem = useCallback(() => {
    const value = inputRef.current.value;

    if (value) {
      inputRef.current.value = "";
      setTodos([...todos, { text: value, done: false }]);
      saveTodoList([...todos, { text: value, done: false }], doneItems);
    } else {
      alert("내용을 입력해 주세요");
    }
  }, [todos, doneItems]);

  const handleSubmit = useCallback(
    (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        addTodoItem();
      }
    },
    [addTodoItem]
  );

  const removeItemFromList = useCallback((list, index) => {
    return list.filter((_, i) => i !== index);
  }, []);

  const toggleDone = useCallback(
    (item, index) => {
      if (item.done) {
        const updatedDoneItems = removeItemFromList(doneItems, index);
        setDoneItems(updatedDoneItems);
        setTodos((prevTodos) => {
          const newTodos = [...prevTodos, { ...item, done: false }];
          saveTodoList(newTodos, updatedDoneItems);
          return newTodos;
        });
      } else {
        const updatedTodos = removeItemFromList(todos, index);
        setTodos(updatedTodos);
        setDoneItems((prevDones) => {
          const newDones = [...prevDones, { ...item, done: true }];
          saveTodoList(updatedTodos, newDones);
          return newDones;
        });
      }
    },
    [doneItems, todos]
  );

  const removeTodoItem = useCallback(
    (item, index, isDone) => {
      if (isDone) {
        const updatedDoneItems = removeItemFromList(doneItems, index);
        setDoneItems(updatedDoneItems);
        saveTodoList(todos, updatedDoneItems);
      } else {
        setTodos((prevState) => {
          const updatedtodos = removeItemFromList(prevState, index);
          saveTodoList(updatedtodos, doneItems);
          return updatedtodos;
        });
      }
    },
    [doneItems, todos]
  );

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
                  ? "url('https://i.ibb.co/NSdSXQ1/2.png')"
                  : "url('https://i.ibb.co/7RzK9yd/1.png')",
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
                  ? "url('https://i.ibb.co/NSdSXQ1/2.png')"
                  : "url('https://i.ibb.co/7RzK9yd/1.png')",
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
