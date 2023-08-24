import React from "react";
import styled from "styled-components";
import ToDoItem from "./ToDoItem";
import { useTodoState } from "./ToDoContext";

const ToDoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const ToDoList = () => {
  const todos = useTodoState();

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
