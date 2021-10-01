import React, {useContext, useReducer} from "react";
import {TodoContext} from "./todoContext";
import {todoReducer} from "./todoReducer";
import {
    ADD_TODO,
    CLEAR_ERROR,
    FETCH_TODOS,
    HIDE_LOADER,
    REMOVE_TODO,
    SHOW_ERROR,
    SHOW_LOADER,
    UPDATE_TODO
} from "../types";
import {ScreenContext} from "../screen/screenContext";

const initialState = {
    todos: [],
    loading: false,
    error: null
}

export const TodoState = ({children}) => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const {resetTodo} = useContext(ScreenContext);

    const fetchTodos = async () => {
        clearError();
        showLoader();
        try {
            const response = await fetch('https://rn-todo-app-c4323-default-rtdb.firebaseio.com/todos.json1', {
                'method': 'GET',
                'headers': {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            const todos = Object.keys(data).map(key => ({...data[key], id: key}));
            dispatch({type: FETCH_TODOS, payload: todos});
            console.log('Fetch todos', todos);
        } catch (e) {
            showError(e);
            console.log(e);
        } finally {
            hideLoader();
        }
    }

    const addTodo = async title => {
        const response = await fetch('https://rn-todo-app-c4323-default-rtdb.firebaseio.com/todos.json',{
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json'
            },
            'body': JSON.stringify({
                title
            })
        });
        const data = await response.json();
        console.log(data);
        dispatch({type: ADD_TODO, payload: {id: data.name, title}});
    }
    const updateTodo = (id, title) => dispatch({type: UPDATE_TODO, payload: {id, title}});
    const removeTodo = id => {
        resetTodo();
        dispatch({type: REMOVE_TODO, payload: {id}});
    };
    const showLoader = () => dispatch({type: SHOW_LOADER});
    const hideLoader = () => dispatch({type: HIDE_LOADER});
    const showError = (error) => dispatch({type: SHOW_ERROR, payload: {error}});
    const clearError = () => dispatch({type: CLEAR_ERROR});


    return (
        <TodoContext.Provider value={{
            todos: state.todos,
            loading: state.loading,
            error: state.error,
            addTodo,
            updateTodo,
            removeTodo,
            fetchTodos,
            clearError
        }}>
            {children}
        </TodoContext.Provider>
    );
}
