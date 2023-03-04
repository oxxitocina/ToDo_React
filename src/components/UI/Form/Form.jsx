import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ButtonAddTask } from "../Button/ButtonAddTask";
import { Input } from "../Input/Input"; 

function Form(props) {

    const [title, setTitle] = useState('фцвфцвфц');

    function addTask(event)  {
        event.preventDefault();
    }

    function handleChange(event)    {
        console.log(1)
        console.log(event.target.value)
        setTitle({value: event.target.value})
    }

    return(
        <form className="task-input-container" id={props.form_ID} onSubmit={addTask}>
            <Input id={props.input_ID} placeholder={props.placeholder} value={title} onChange={handleChange}/>
            <ButtonAddTask buttonIcon={props.buttonIcon}/>
        </form>
    )
} 

export { Form }