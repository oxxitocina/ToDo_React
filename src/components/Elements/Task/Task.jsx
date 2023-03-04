import React from "react";
import { Checkbox } from "../../UI/Checkbox/Checkbox"; 
import { Button } from "../../UI/Button/Button";
import { Label } from "../../UI/Label/Label";

function Task(props) {

    return (
        <div className="task">
            <div className="task-checkbox-container">
                <Checkbox/>
                <Label taskText = {props.taskText}></Label>
            </div>
                <Button buttonIcon = {props.buttonIcon}></Button>
        </div>
    )
}

export { Task }