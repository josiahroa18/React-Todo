import React from 'react';
import '../App.css'

function Todo(props){
    return(
        <div className={`${props.item.completed ? 'completed' : 'todo-card'}`}>
            <p 
                onClick={() => props.toggleDone(props.item.id)} 
                id={props.item.id}
                style={props.item.completed ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}
            >{props.item.task} </p>
        </div>
    );
}

export default Todo;