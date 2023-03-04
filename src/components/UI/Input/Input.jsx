import React from "react";
import { useState } from "react";

function Input(props)   {
    return(
        <input type="text" className="task-input task-input-high" id={props.id} placeholder={props.placeholder} value={props.value}/>
    )
}

export { Input }

