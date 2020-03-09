import React from 'react';

function Todo(props){
    return(
        <div>
            <p 
                onClick={() => props.toggleDone(props.item.id)} 
                id={props.item.id}
                style={props.item.completed ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}
            >{props.item.task} </p>
        </div>
    );
}

export default Todo;