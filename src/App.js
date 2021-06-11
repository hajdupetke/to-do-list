import React from "react";
import ListItem from "./components/ListItem";
import styled from 'styled-components';
import {FaPlus} from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TextBox = styled.input.attrs({type: 'textbox'})`
  width: 40vw;
  height: 3vh;
  font-size: 3vh;
`

const Plus = styled(FaPlus)`
  margin-left: 5px;
  border: 2px solid black;
  border-radius: 50%;
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tasks: [], value: ""};
  }
  
  click = () => {
    let temp = this.state.tasks;
    temp.push({title: this.state.value, completed: false, id: Math.random() * 10000});
    this.setState({tasks: temp});
  }

  handleChange = e => {
    this.setState({value: e.target.value});
  }

  checkChange = (isChecked, id) => {
    let temp = [...this.state.tasks];
    let index = temp.findIndex(item => item.id === id);
    temp[index].completed = isChecked;
    this.setState({tasks: temp});
  }

  removeItem = id => {
    let temp = [...this.state.tasks];
    let deleted = temp.filter((value, index, arr) => value.id !== id);
    this.setState({tasks: deleted});
  }

  
  render() {
    return (
      <Container className="App">
        <h1>To-Do List</h1>
        <div>
          <TextBox value={this.state.value} onChange={this.handleChange} />
          <Plus onClick={this.click}/>
        </div>
        {this.state.tasks.map(item => (
          <ListItem key={item.id} id={item.id} title={item.title} checked={item.completed} onChange={this.checkChange} remove={this.removeItem}/>
        ))
      }
      </Container>
    );    
  }
  
  
}

export default App;