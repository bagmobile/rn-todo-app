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
import {Api} from "../../services/api";

const initialState = {
    todos: [],
    loading: false,
    error: null
}

export const TodoState = ({children}) => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const {resetTodo} = useContext(ScreenContext);

    const callApi = (methodApi) => {
        clearError();
        showLoader();
        methodApi()
            .catch(error => showError(error))
            .finally(() => hideLoader());
    }

    const fetchTodos = () => {

        callApi(() => Api.getTodos()
            .then(data => {
                const todos = Object.keys(data).map(key => ({...data[key], id: key}));
                dispatch({type: FETCH_TODOS, payload: todos});
            })
        );
    }

    const addTodo = title => {

        callApi(() => Api.addTodo({title})
            .then(data => {
                dispatch({type: ADD_TODO, payload: {id: data.name, title}});
            })
        );
    }

    const updateTodo = (id, title) => {

        callApi(() => Api.updateTodo(id, {title})
            .then(() => {
                dispatch({type: UPDATE_TODO, payload: {id, title}});
            })
        );
    }
    const removeTodo = id => {

        callApi(() => Api.removeTodo(id)
            .then(() => {
                resetTodo();
                dispatch({type: REMOVE_TODO, payload: {id}});
            })
        );

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
            fetchTodos/*: callApi(fetchTodos)*/,
            clearError
        }}>
            {children}
        </TodoContext.Provider>
    );
}
