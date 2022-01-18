import React from "react";

type propsType = {
    title: string
    arrForTodolist1: Array<inArray>
}

type inArray = {
    id: number
    title: string
    isDone: boolean
}

export const Todolist = (props: propsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.arrForTodolist1.map(t => {
                    return (
                        <li key={t.id}>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}