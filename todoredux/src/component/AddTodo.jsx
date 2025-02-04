import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";
import { useState } from "react";

function AddTodo() {
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    const addTodoHandler = (e) => {
        e.preventDefault()
        if(input.trim()){

            dispatch(addTodo({text: input}))
            setInput('')
        }
    }


  return (
    <div>
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          placeholder="Add Todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTodo;
