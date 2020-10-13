import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import "./TodoItem.css";

export default function TodoItem({todo}) {
    return (
        <div>
            <li className={classNames({ complated: todo.complated })}>{todo.text}</li>
        </div>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}


