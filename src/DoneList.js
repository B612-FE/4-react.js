import React from "react";
const DoneList = ({ toDo, onToggle, onRemove }) => {
  const doneList = toDo && toDo.filter((it) => it.isDone === true);
  return (
    <div className="doneList">
      <h2>Already Done</h2>
      <ul>
        {doneList &&
          doneList.map((it) => (
            <span className="listWrapper" key={it.id}>
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
DoneList.defaultProps = [];
export default React.memo(DoneList);
