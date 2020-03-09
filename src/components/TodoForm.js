import React from 'react';

class TodoForm extends React.Component{
    render(){
        return(
            <form>
                <input placeholder='...todo' onChange={this.props.handleChange} value={this.props.input}></input>
                <button onClick={this.props.handleSubmit}>Add Todo</button>
            </form>
        );
    }
}

export default TodoForm;