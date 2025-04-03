import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const AddTodo = () => {
    const [input, setInput] = useState();

    const dispatch = useDispatch();

    const inputHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('')
    }
    return (
    <>
    <form onSubmit={inputHandler}>
        <input type='text' placeholder='Enter Name' value={input} onChange={(e) => setInput(e.target.value)} />
        <button>Submit</button>
    </form>
    </>
    )
}

export default AddTodo