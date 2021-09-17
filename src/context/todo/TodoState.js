import React, {useReducer} from "react";
import {TodoContext} from "./todoContext";
import {todoReducer} from "./todoReducer";
import {ADD_TODO, REMOVE_TODO, RESET_TODO, SELECT_TODO, UPDATE_TODO} from "../types";

const initialState = {
    todos: [],
    activeTodo: null
}

export const TodoState = ({children}) => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const addTodo = title => dispatch({type: ADD_TODO, payload: {title}});
    const updateTodo = (id, title) => dispatch({type: UPDATE_TODO, payload: {id, title}});
    const removeTodo = id => dispatch({type: REMOVE_TODO, payload: {id}});
    const selectTodo = id => dispatch({type: SELECT_TODO, payload: {id}});
    const resetTodo = () => dispatch({type: RESET_TODO})

    return (
        <TodoContext.Provider value={{
            todos: state.todos,
            activeTodo: state.activeTodo,
            addTodo,
            updateTodo,
            removeTodo,
            selectTodo,
            resetTodo
        }}>
            {children}
        </TodoContext.Provider>
    );
}
