import React, { useState } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

export default function Todo() {
    const [todos, setTodos] = useState([
        { id: 1, completed: true, text: '你' },
        { id: 2, completed: false, text: '我' },
        { id: 4, completed: true, text: '他' }
    ])

    // 添加Todo
    function addTodo(text) {
        setTodos([
            ...todos,
            {
                id: todos.length === 0 ? 1 : todos[todos.length - 1].id + 1,
                completed: false,
                text
            }
        ])
    }
    return (
        <div>
            <AddTodo addTodo={addTodo}/>

            <TodoList todos={todos} />
        </div>
    )
}
