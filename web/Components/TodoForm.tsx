import React, { FC } from "react"
import { useTodo } from "../Context/todoContext"

export const TodoForm: FC = () => {

    const { handleCreateTodo } = useTodo();

    return (
        <button onClick={handleCreateTodo}>add todo fake</button>
    )
}