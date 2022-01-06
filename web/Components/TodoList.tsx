import React from "react";
import { useTodo } from "../Context/todoContext";

export default function TodoList() {

    const { todos } = useTodo();

    return (
        <div>
            {
                todos?.map((todo) => (
                    <li>{todo.title}</li>
                ))
            }
        </div>
    )
}