import { useRef, useState } from "react";

const TodoEditor = ({ onCreate }) => {
  const toDoInput = useRef();
  const [toDo, setToDo] = useState({
    text: "",
  });

  const handleChange = (e) => {
    setToDo(e.target.value); //새로 받은 값으로 toDo의 state변경
  };

  const handleSubmit = (e) => {
    if (toDo === "") {
      toDoInput.current.focus();
      alert("Enter at least one word!!");
    } else {
      onCreate(toDo, false);
      setToDo("");
    }
  };
  return (
    <div className="ToDoEditor">
      <div>
        <input
          ref={toDoInput}
          name="todo"
          placeholder="Enter your to-do"
          value={toDo}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>+</button>
      </div>
    </div>
  );
};
export default TodoEditor;
