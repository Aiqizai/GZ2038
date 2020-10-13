import React,{useState} from 'react'
import PropTypes from 'prop-types';

export default function AddTodo(props) {
    const [value,setValue] = useState('hello')

    function changeHandler(e) {
        console.log(e,e.target)
        setValue(e.target.value)
    }

    return (
        <div>
            <input type="text" name="" value={value} onChange={changeHandler}/>
            <button onClick={()=> {props.addTodo(value)}}>AddTodo</button>
        </div>
    )
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

