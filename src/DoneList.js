//import Item from "./Item";

const DoneList = (toDoList, onRemove, onToggle) => {
  const isDoneList = toDoList.filter((it) => it.isDone === true);
  return (
    <section className="DoneList">
      <h4>🐾Done!</h4>
      <ul>
        {isDoneList &&
          isDoneList.map((it) => (
            <li key={it.id}>
              <span onClick={() => onToggle(it.id)}>{it.text}</span>
              <button onClick={() => onRemove(it.id)}>🧹</button>
            </li>
          ))}
      </ul>
    </section>
  );
};

DoneList.defaultProps = {
  toDoList: [],
};

export default DoneList;
