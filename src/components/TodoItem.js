import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

const CheckBox = styled.input.attrs({ type: "checkbox" })`
  position: relative;
  cursor: ;pointer;
  margin: 30px;
  margin-right: 10px;
  width: 20px;
  height: 20px;
  '&:before': {
      content: "";
      display: block;
      position: absolute;
      width: 20px;
      height: 20px;
      top: 0;
      left: 0;
      background-color:#e9e9e9;
  },
  '&:checked:before': {
      content: "";
      display: block;
      position: absolute;
      width: 20px;
      height: 20px;
      top: 0;
      left: 0;
      background-color:#1E80EF;
  },
  '&:checked:after': {
      content: "";
      display: block;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 2px 2px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
      position: absolute;
      top: 2px;
      left: 6px;
  } 
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  height: 10vh;
  width: 30vw;
  background-color: #eae9e8;
  margin: 15px;
`;

const Icon = styled(FaTimes)`
  position: absolute;
  right: 30px;
  color: red;
  cursor: pointer;
`;

const Text = styled.p`
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
`;

const TodoItem = ({ index, todo, onChange, remove }) => {
  const handleChange = (e) => {
    onChange(e.target.checked, index);
  };
  const removeChange = (e) => {
    remove(index);
  };

  return (
    <Box>
      <CheckBox checked={todo.completed} onChange={handleChange} />
      <Text checked={todo.completed}>{todo.text}</Text>
      <Icon onClick={removeChange} />
    </Box>
  );
};

export default TodoItem;
