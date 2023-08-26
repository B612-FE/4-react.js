// 타이틀, 오늘의 날짜 그리고 남은 할 일 개수를 보여줍니다.
// react-live-clock 사용방법
// 1. 터미널에 npm install --save react-live-clock 을 입력해서 설치합니다.
// 2. 코드 상단 위에 import Clock from 'react-live-clock'; 으로 시간 컴포넌트를 생성합니다.
// 3. 코드 형식은 이렇게 작성합니다.
// <Clock format={'원하는_시간_형식'} ticking={실시간으로 반복되는 것을 true, false로 설정} timezone={'어느나라를_기준으로_할_것인지'} />

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
    color: #0A82FF;
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
        <div className="todo_subtitle">해야할 일을 정리하자 🤗</div>
        <div className="todo_clock">
          <Clock
            format={"YYYY-MM-DD"}
            ticking={false}
            timezone={"Asia/Seoul"}
          />
        </div>
        <div className="todo_clock">
          <Clock format={"HH:mm:ss"} ticking={true} timezone={"Asia/Seoul"} />
        </div>
        <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
      </div>
    </MyHeaderBlock>
  );
};

export default MyHeader;
