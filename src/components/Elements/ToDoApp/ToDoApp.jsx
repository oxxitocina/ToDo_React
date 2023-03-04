import React from "react";
import { Form } from "../../UI/Form/Form";
import { HeaderPriority } from "../HeaderPriority/HeaderPriority";
import { TasksList } from "../TasksList/TasksList";

function ToDoApp()  {
    return(
        <div className="todo">
            <div className="todo-container">

                <HeaderPriority header_text="HIGH" />

                <Form form_ID="high" inputID="task-input-high" placeholder="Добавить важных дел" buttonIcon="+"/>

                <TasksList id="tasks-high-list" />

                <HeaderPriority header_text="LOW" />

                <Form form_ID="low" inputID="task-input-low" placeholder="Добавить" buttonIcon="+"/>

                <TasksList id="tasks-low-list" />

            </div>
        </div>
    )
}

export { ToDoApp }