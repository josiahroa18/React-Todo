import React from 'react';

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state = {
            input:''
        }
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state.input);
        this.setState({
            input: ''
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input placeholder='...todo' onChange={this.handleChange} value={this.state.input}></input>
                <button onClick={this.handleSubmit}>Add Todo</button>
            </form>
        );
    }
}

export default TodoForm;