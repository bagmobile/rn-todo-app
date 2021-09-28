import {RESET_TODO, SELECT_TODO} from "../types";

export const screenReducer = (state, action) => {

    switch (action.type) {
        case SELECT_TODO:
            return {...state, selectedTodo: action.payload}
        case RESET_TODO:
            return {...state, selectedTodo: null}
        default:
            return state;
    }
}
