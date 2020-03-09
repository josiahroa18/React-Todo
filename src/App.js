import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      list: [],
    }
  }

  componentDidMount = () => {
    this.setState({
      list: JSON.parse(localStorage.getItem('list'))
    })
  }

  componentDidUpdate = () => {
    window.localStorage.setItem('list', JSON.stringify(this.state.list));
  }

  addTask = taskName => {
    this.setState({
      list: [...this.state.list, {
        task: taskName,
        completed: false,
        id: Date.now()
      }]
    })
  }

  toggleDone = clickedItemId => {
    this.setState({
      list: this.state.list.map(task => {
        if(task.id === clickedItemId){
          return {
            ...task, 
            completed: !task.completed
          }
        }else{
          return task;
        }
      })
    })
  }

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      list: this.state.list.filter(item => {
        return !item.completed;
      })
    })
  }

  render() {
    return (
      <div className='app'>
        <h2>My Todo List</h2>
        <TodoList list={this.state.list} toggleDone={this.toggleDone}/>
        <TodoForm 
          addTask={this.addTask}
          handleClearCompleted={this.handleClearCompleted} 
          input={this.state.input}
        />
        <button onClick={this.clearCompleted}>Clear Completed</button>
      </div>
    );
  }
}

export default App;
