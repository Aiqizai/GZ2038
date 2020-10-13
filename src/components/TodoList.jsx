import React from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types';

export default function TodoList(props) {
    return (
        <ul style={{margin: 0, padding: 0, listStyle: 'none'}}>
            {props.todos.map((todo, index) => (
                <TodoItem key={todo.id} todo={todo} toggleTodo={props.toggleTodo} removeTodo={props.removeTodo}/>
            ))}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
}
