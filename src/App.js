// npm i react-icons styled-components

// styled-components :
// Javascript 파일 내에서 CSS를 사용할 수 있게 해주는 대표적인 CSS-in-JS 라이브러리로 React 프레임워크를 주요 대상으로 한 라이브러리이다.
// Javascript 코드 내에서 일반 CSS로 구성 요소의 스타일을 지정할 수 있다.
// ❗ 왜 styled-components를 사용하는가?
// Component가 많을 경우, class명이 중복될 수 있는 문제가 발생할 수 있다.
// 이를 방지하기 위해 class 선언 없이 component에 css를 직접 장착하는 방식을 사용하면 각 components간의 중복이 발생할 필요도 없고, 따라서 class명이 중복되는 일도 막을 수 있다.
// = CSS in JS
// 추가적인 학습은 다음의 링크를 통해 진행하면 좋다 : https://www.daleseo.com/react-styled-components/

// styled-components 에서 특정 컴포넌트를 만들어서 스타일링 하는게 아니라
// 글로벌 스타일을 추가하고 싶을 땐 createGlobalStyle 사용

import "./App.css";
import { createGlobalStyle } from "styled-components";
import MyHeader from "./components/MyHeader";
import ToDoList from "./components/ToDoList";
import ToDoInput from "./components/ToDoInput";
import ToDoTemplate from "./components/ToDoTemplate";
import { ToDoProvider } from "./components/ToDoContext";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <div className="App">
      <ToDoProvider>
        <GlobalStyle />
        <ToDoTemplate>
          <MyHeader />

          <ToDoInput />
          <ToDoList />
        </ToDoTemplate>
      </ToDoProvider>
    </div>
  );
}

export default App;
