import { createContext } from "react";
import { useTodo } from "../hooks/useTodo";

export const todocontext = createContext(null)

export const TodoContext = ({ children }) => {
  const { handleOnSutmit,
    handleInput,
    task,
    editId,
    listTask,
    handleDelate,
    handleEdit } = useTodo()
  return (
    <todocontext.Provider
      value={{
        handleOnSutmit,
        handleInput,
        task,
        editId,
        listTask,
        handleDelate,
        handleEdit
      }}>
      {children}
    </todocontext.Provider>
  )
}

