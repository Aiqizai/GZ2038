import React from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types';

export default function TodoList(props) {
    return (
        <ul>
            {props.todos.map((todo, index) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
}
