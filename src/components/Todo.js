import React from 'react';

class Todo extends React.Component{
    render(){
        return(
            <div>
                <p onClick={this.props.handleDone} id={this.props.item.id}>{this.props.item.value}</p>
            </div>
        );
    }
}

export default Todo;