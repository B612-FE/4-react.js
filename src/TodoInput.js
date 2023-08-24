import React, { useRef, useState } from "react";

const TodoInput = ({ onCreate }) => {
  const [todoInput, setTodoInput] = useState("");
  const inputRef = useRef();
  const handleSubmit = () => {
    if (todoInput.length <= 0) {
      alert("할 일을 입력하세요.");
      inputRef.current.focus();
      return;
    }
    onCreate(todoInput);
    setTodoInput("");
  };
  return (
    <div className="todoInput">
      <h2>Things To Do</h2>
      <input
        ref={inputRef}
        value={todoInput}
        onChange={(e) => {
          setTodoInput(e.target.value);
        }}
        placeholder="할 일을 입력해주세요."
      />
      <button onClick={handleSubmit}>추가</button>
    </div>
  );
};
TodoInput.defaultProps = [];
export default React.memo(TodoInput);
