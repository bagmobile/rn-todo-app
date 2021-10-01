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

export const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state, todos: [...state.todos, {
                    id: action.payload.id,
                    title: action.payload.title
                }]
            };
        case REMOVE_TODO:
            return {
                ...state, todos: state.todos.filter(item => item.id !== action.payload.id)
            };
        case UPDATE_TODO:
            return {
                ...state, todos: state.todos.map(item => {
                    if (item.id === action.payload.id) {
                        item.title = action.payload.title
                    }
                    return item;
                })
            };
        case FETCH_TODOS:
            return {...state, todos: action.payload};
        case SHOW_LOADER:
            return {...state, loading: true};
        case HIDE_LOADER:
            return {...state, loading: false};
        case SHOW_ERROR:
            return {...state, error: action.payload.error};
        case CLEAR_ERROR:
            return {...state, error: null}
        default:
            return state;
    }
}
