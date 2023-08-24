//import Item from "./Item";

const ToDoList = ({ toDoList, onRemove, onToggle }) => {
  //ISdone이 false이면 출력하는 기능
  const isToDoList = toDoList.filter((it) => it.isDone === false);

  return (
    <section className="ToDoList">
      <h4>📁to do </h4>
      <ul>
        {isToDoList &&
          isToDoList.map((it) => (
            <li key={it.id}>
              <span onClick={() => onToggle(it.id)}>{it.text}</span>
              <button onClick={() => onRemove(it.id)}>🧹</button>
            </li>
          ))}
      </ul>
    </section>
  );
};

ToDoList.defaultProps = {
  toDoList: [],
};

export default ToDoList;
