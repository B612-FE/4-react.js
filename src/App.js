import { useState, useEffect } from "react";
import "./App.css";
import TodoEditor from "./ToDoEditor";
import ToDoList from "./ToDoList";
import DoneList from "./DoneList";

function App() {
  const [toDoList, setToDo] = useState([]);

  useEffect(() => {
    const localToDoList = localStorage.getItem("itemList");
    if (localToDoList) {
      setToDo(JSON.parse(localToDoList));
    }
  }, []); //mount시 local storage에서 data 가져오기

  const onToggle = (targetId) => {
    //바뀐 toggle값, id를 받아와서 toggle값 재설정하고 setTodo
    setToDo(
      toDoList.map((it) =>
        it.id === targetId ? { ...it, isDone: !it.isDone } : it
      )
    );
  };

  const onRemove = (targetId) => {
    const newToDoList = toDoList.filter((it) => it.id !== targetId);
    setToDo(newToDoList);
  };

  const onCreate = (todo, _isDone) => {
    const newToDo = { id: Date.now(), text: todo, isDone: _isDone };
    setToDo([newToDo, ...toDoList]);
    localStorage.setItem("itemList", JSON.stringify(toDoList));
  };

  return (
    <div className="Container">
      <h2>Things to do</h2>
      <TodoEditor onCreate={onCreate}></TodoEditor>
      <ToDoList
        onToggle={onToggle}
        onRemove={onRemove}
        toDoList={toDoList}
      ></ToDoList>
      <DoneList
        onToggle={onToggle}
        onRemove={onRemove}
        toDoList={toDoList}
      ></DoneList>
    </div>
  );
}

export default App;
