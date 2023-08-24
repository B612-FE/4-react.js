import React from "react";
import styled from "styled-components";
import Clock from "react-live-clock";
import { useTodoState } from "./ToDoContext";

const MyHeaderBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 30px;
  border-bottom: 1px solid #e9ecef;
  .todo_title {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .todo_subtitle {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 24px;
    color: #343a40;
  }
  .todo_clock {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 20px;
    font-weight: bold;
`;

const MyHeader = () => {
  const todos = useTodoState();
  const undoneTasks = todos.filter((todo) => !todo.done);

  return (
    <MyHeaderBlock>
      <div className="todo_app_header">
        <div className="todo_title"> To Do List ::</div>
        <div className="todo_subtitle">해야할 일을 정리하자 !</div>
        <div className="todo_clock">
          <Clock
            format={"YYYY-MM-DD"}
            ticking={false}
            timezone={"Asia/Seoul"}
          />
        </div>
        <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
      </div>
    </MyHeaderBlock>
  );
};

export default MyHeader;
