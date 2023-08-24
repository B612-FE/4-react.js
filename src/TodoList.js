import React from "react";
const TodoList = ({ toDo, onToggle, onRemove }) => {
  const todoList = toDo && toDo.filter((it) => it.isDone === false);
  return (
    <div className="todoList">
      <h2>To Be Done</h2>
      <ul>
        {todoList &&
          todoList.map((it) => (
            <span key={it.id} className="listWrapper">
              <li key={it.id} onClick={() => onToggle(it.id)}>
                {it.task}
              </li>
              <button onClick={() => onRemove(it.id)}>삭제</button>
            </span>
          ))}
      </ul>
    </div>
  );
};
TodoList.defaultProps = [];
export default React.memo(TodoList);
