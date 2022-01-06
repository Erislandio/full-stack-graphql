import React, { createContext, FC, useContext, useEffect, useState } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { TODOS } from "../graphql/queries/todos";
import { CrateTodoInput, Todo } from "../typings/Todo";
import { CREATE_TODO } from "../graphql/mutations/todos";

export interface ITodoContext {
    todos?: Todo[];
    handleCreateTodo: () => Promise<void>
}

export const TodoContext = createContext<ITodoContext>({
    handleCreateTodo: async () => { },
    todos: []
});

const TodoContextWrapper: FC<any> = ({ children }) => {

    const [getTodos, { data, loading, error }] = useLazyQuery<{ todos: Todo[] }>(TODOS, {
        fetchPolicy: 'no-cache',
        variables: {
            limit: 100,
            offset: 0
        },
    });

    const [createTodo] = useMutation<Todo, CrateTodoInput>(CREATE_TODO);

    useEffect(() => {
        getTodos();
    }, [])

    const handleCreateTodo = async () => {
        await createTodo({
            variables: {
                title: 'test de front',
                description: "teste de front react"
            }
        })

        getTodos();
    }

    if (loading) {
        return <h1>Loading</h1>
    }

    if (error) {
        return <h1>Error</h1>
    }

    return (
        <TodoContext.Provider value={{
            todos: data?.todos,
            handleCreateTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodo = () => useContext(TodoContext);

export default TodoContextWrapper;