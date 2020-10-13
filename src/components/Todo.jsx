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
    // 切换状态
    function toggleTodo(id) {
        // 根据 id 查找 todos 匹配的 反转completed
        // 返回新数组
        setTodos(todos.map((todo)=> {
            if(todo.id === id) {
                return {...todo, completed: !todo.completed}
            }else {
                return {...todo}
            }
        }))
    }
    // 删除todo
    function removeTodo(id) {
        setTodos(todos.filter((todo)=> {
            return todo.id !== id
        }))
    }

    return (
        <div>
            <AddTodo addTodo={addTodo}/>

            <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
        </div>
    )
}
