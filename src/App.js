import "./App.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import DoneList from "./DoneList";
import { useCallback, useEffect, useReducer } from "react";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "Init": {
      return action.data;
    }
    case "Create": {
      newState = [action.data, ...state];
      break;
    }
    case "Toggle": {
      newState = state.map((it) =>
        it.id === action.id ? { ...it, isDone: !it.isDone } : it
      );
      break;
    }
    case "Remove": {
      newState = state.filter((it) => it.id !== action.id);
      break;
    }
    default:
      return state;
  }
  localStorage.setItem("TodoList", JSON.stringify(newState));
  return newState;
};

function App() {
  const [toDo, dispatch] = useReducer(reducer);

  useEffect(() => {
    const localTodo = JSON.parse(localStorage.getItem("TodoList"));
    if (localTodo) {
      dispatch({ type: "Init", data: localTodo });
    }
  }, []);

  const onCreate = useCallback((todoInput) => {
    dispatch({
      type: "Create",
      data: { id: new Date().getTime(), task: todoInput, isDone: false },
    });
  }, []);
  const onToggle = useCallback((id) => {
    dispatch({ type: "Toggle", id });
  }, []);
  const onRemove = useCallback((id) => {
    dispatch({ type: "Remove", id });
  }, []);

  return (
    <div className="app">
      <TodoInput onCreate={onCreate} />
      <TodoList toDo={toDo} onToggle={onToggle} onRemove={onRemove} />
      <DoneList toDo={toDo} onToggle={onToggle} onRemove={onRemove} />
    </div>
  );
}

export default App;
