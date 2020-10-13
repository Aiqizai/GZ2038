import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import "./TodoItem.css";

export default function TodoItem({ todo, toggleTodo, removeTodo }) {
    return (
        <div>
            <li className={classNames({ completed: todo.completed })}>
                <label>
                    <input type="text" type="checkbox" onChange={() => toggleTodo(todo.id)} />
                    <i className="icon"></i>
                </label>
                <span className={'todoText'}>{todo.text}</span>
                <del onClick={()=> removeTodo(todo.id)}>X</del>
            </li>
        </div>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}


