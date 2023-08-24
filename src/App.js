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
