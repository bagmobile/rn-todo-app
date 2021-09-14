import React, {useReducer} from "react";
import {TodoContext} from "./todoContext";
import {todoReducer} from "./todoReducer";

const initialState = {
    todos: []
}

export const TodoState = ({children}) => {
    const [state, dispatch] = useReducer(todoReducer, initialState)
    return (<TodoContext.Provider value={{todos: state.todos}}>{children}</TodoContext.Provider>);
}
