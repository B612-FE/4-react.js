// 여러개의 할 일 항목을 보여주는 기능

import React from "react";
import styled from "styled-components";
import ToDoItem from "./ToDoItem";
import { useTodoState } from "./ToDoContext";

const ToDoListBlock = styled.div`
  flex: 1; /* 자신이 차지 할 수 있는 영역을 꽉 채우도록 설정 */
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const ToDoList = () => {
  const todos = useTodoState();
  const copyTodos = JSON.parse(JSON.stringify(todos));
  const activeTodos = copyTodos.filter((iter) => iter.done !== true);
  const completedTodos = copyTodos.filter((iter) => iter.done === true);

  return (
    <ToDoListBlock>
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </ToDoListBlock>
  );
};

export default ToDoList;
