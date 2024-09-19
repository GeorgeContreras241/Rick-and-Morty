import React, { useState,useReducer } from 'react'

const initialState = []

const listReducer = (listTask ,action) => {
    switch (action.type) {
        case "agregarTarea":
            return [
                ...listTask,
                {
                    "id": action.id,
                    "task": action.payload
                }
            ]
        case "eliminarTarea":
            return listTask.filter((item) =>
                item.id !== action.id
            )
        case "editarTarea":
            return listTask.map((task) =>
                task.id === action.id ? { ...task, task: action.payload } : task
            )
        default:
            break;
    }
}

export const useTodo = () => {
    const [task, setTask] = useState("")
    const [listTask, dispatch] = useReducer(listReducer, initialState)
    const [editId, setEditId] = useState(null)

    const handleInput = (event) => {
        setTask(event.target.value)
    }

    const handleOnSutmit = (event) => {
        event.preventDefault()
        if (editId !== null) {
            dispatch({ type: "editarTarea", id: editId, payload: task })
            setEditId(null)
        } else {
            dispatch({ type: "agregarTarea", id: listTask.length, payload: task })
        }
        setTask("")
    }
    const handleDelate = (id) => {
        dispatch({ type: "eliminarTarea", id: id, payload: task })
    }
    const handleEdit = (id, task) => {
        setEditId(id)
        setTask(task)

    }
    return {
        handleOnSutmit,
        handleInput,
        task,
        editId,
        listTask,
        handleDelate,
        handleEdit

    }
}