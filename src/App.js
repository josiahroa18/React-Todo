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
    }
  }

  addTask = (taskName) => {
    this.setState({
      list: [...this.state.list, {
        task: taskName,
        completed: false,
        id: Date.now()
      }]
    })
  }

  toggleDone = (clickedItemId) => {
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

  render() {
    return (
      <div>
        <h2>My Todo List</h2>
        <TodoList list={this.state.list} toggleDone={this.toggleDone}/>
        <TodoForm 
          addTask={this.addTask}
          handleClearCompleted={this.handleClearCompleted} 
          input={this.state.input}
        />
      </div>
    );
  }
}

export default App;
