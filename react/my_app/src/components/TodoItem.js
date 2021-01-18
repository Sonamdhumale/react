import React, { Component } from 'react';
import propTypes from 'prop-types';

export class TodoItem extends Component {

    render() {
        return (
            <div style={{
                background : 'f4f4f4',
                padding : '10px',
                borderBottom: "",
                textDecoration : this.props.todo.completed ? 
                'line-through' : 'none'
            }}>
                <p>{this.props.todo.title}</p>
                
            </div>
        )
    }
}

//prop types
TodoItem.propTypes = {
    todo : propTypes.object.isRequired
}


export default TodoItem
