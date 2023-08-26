import React from "react";

const ToDoList = ({ tasks, onToggle, onRemove }) => {
  return (
    <section className="ToDoList">
      <h4>🐾Done!</h4>
      <ul>
        {tasks
          .filter((it) => it.isDone === true)
          .map((task) => (
            <li key={task.id}>
              <span
                className={task.isDone ? "done" : ""}
                onClick={() => onToggle(task.id)}
              >
                {task.text}
              </span>
              <button onClick={() => onRemove(task.id)}>🧹</button>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default ToDoList;
