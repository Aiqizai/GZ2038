import React, { useState } from 'react'
import PropTypes from 'prop-types';

export default function AddTodo(props) {
    const [value, setValue] = useState('')

    function changeHandler(e) {
        console.log(e, e.target)
        setValue(e.target.value)
    }

    return (
        <div>
            <input type="text" placeholder="What need to be done?" value={value} onChange={changeHandler} />
            <button onClick={() => { props.addTodo(value); setValue("") }}>AddTodo</button>
        </div>
    )
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

