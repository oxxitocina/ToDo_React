import React from "react";

function Label(props)    {
    return  (
        <div className="label_Main">
            <span>{props.taskText}</span>
        </div>
    )
}

export { Label }