import React from "react";
import styled from "styled-components";

const ToDoTemplateBlock = styled.div`
  width: 512px;
  height: 768px;

  position: relative;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto;

  margin-top: 80px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

const ToDoTemplate = ({ children }) => {
  return <ToDoTemplateBlock>{children}</ToDoTemplateBlock>;
};

export default ToDoTemplate;
