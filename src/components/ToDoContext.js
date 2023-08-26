// 하나의 Context 를 만들어서 state 와 dispatch 를 함께 넣어주는 대신에,
// 두개의 Context 를 만들어서 따로 따로 넣어준다. 
// -> dispatch 만 필요한 컴포넌트에서 불필요한 렌더링을 방지 할 수 있습니다.
// 추가적으로, 사용하게 되는 과정에서 더욱 편리하기도 합니다.

import React, { useReducer, createContext, useContext, useRef } from "react";

const todos = [];

function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function ToDoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, todos);
  // 새로운 항목을 추가 할 때 사용 할 고유 ID를 useRef 를 사용하여 관리
  const nextId = useRef(1);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}
// 컴포넌트에서 useContext 를 직접 사용하는 대신에, 
// useContext 를 사용하는 커스텀 Hook 을 만들어서 export
// 사용성 증대 효과 !
// + TodoProvider 로 감싸져있지 않을 때의 에러 처리.

export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error("Cannot find ToDoProvider");
  }
  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error("Cannot find ToDoProvider");
  }
  return context;
}

export function useTodoNextId() {
  const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error("Cannot find ToDoProvider");
  }
  return context;
}
