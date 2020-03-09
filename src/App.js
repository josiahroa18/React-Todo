import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      list: [],
      input: ''
    }
  }

  handleChange = (e) => {
    this.setState({input: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      list: [...this.state.list, {
        value: this.state.input, 
        done: false, 
        id: Date.now()
      }],
      input: ''
    });
  }

  handleDone = (e) => {
    console.log(e.target.id);
  }

  render() {
    return (
      <div>
        <h2>My Todo List</h2>
        <TodoList list={this.state.list} handleDone={this.handleDone}/>
        <TodoForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} input={this.state.input}/>
      </div>
    );
  }
}

export default App;
