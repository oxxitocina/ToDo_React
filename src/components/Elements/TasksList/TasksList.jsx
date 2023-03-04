import React from "react";
import { Task } from "../Task/Task";

function TasksList(props)    {
    if(props.id === "tasks-high-list")    {

        return(
            <div id={props.id}>
                <Task taskText="fvdvdfvdfvdf"/>
    
                <Task taskText="123jnjfnjndkjSSЫЫЫЫЫ
                ЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫ"/>
    
                <Task taskText="awdawdmakwmkdaw"/>
            </div>
        )

    }else{

        return(
            <div id={props.id}>
                <Task taskText="LOWLWOLWOLWOWLOW"/>
            </div>
        )
        
    }
}

export { TasksList }