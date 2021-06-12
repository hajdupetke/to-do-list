import React, { useState } from "react";
import ListItem from "./components/TodoItem";
import styled from "styled-components";
import TodoForm from "./components/TodoForm";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  const [tasks, setTodos] = useState([]);

  const AddTodo = (value) => {
    let temp = [...tasks, { text: value, completed: false }];
    setTodos(temp);
  };

  const checkChange = (isChecked, index) => {
    let temp = [...tasks];
    temp[index].completed = isChecked;
    setTodos(temp);
  };

  const removeItem = (index) => {
    let temp = [...tasks];
    temp.splice(index, 1);
    setTodos(temp);
  };

  return (
    <Container className="App">
      <h1>To-Do List</h1>
      <TodoForm AddTodo={AddTodo} />
      {tasks.map((item, index) => (
        <ListItem
          key={index}
          index={index}
          todo={item}
          onChange={checkChange}
          remove={removeItem}
        />
      ))}
    </Container>
  );
};

export default App;
