import React, { useState } from "react";
import styled from "styled-components";

const TextField = styled.input.attrs({ type: "text" })`
  width: 40vw;
  height: 3vh;
  font-size: 3vh;
`;

const TodoForm = ({ AddTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    AddTodo(value);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField value={value} onChange={handleChange} />
    </form>
  );
};

export default TodoForm;
