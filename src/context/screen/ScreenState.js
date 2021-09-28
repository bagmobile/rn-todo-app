import React, {useReducer} from 'react';
import {ScreenContext} from "./screenContext";
import {RESET_TODO, SELECT_TODO} from "../types";
import {screenReducer} from "./screenReducer";

const initialState = {
    selectedTodo: null
}

const ScreenState = ({children}) => {

    const [state, dispatch] = useReducer(screenReducer, initialState);

    const selectTodo = todo => dispatch({type: SELECT_TODO, payload: todo});
    const resetTodo = () => dispatch({type: RESET_TODO});
    const isSelected = state.selectedTodo !== null;

    return (
        <ScreenContext.Provider value={{
            selectedTodo: state.selectedTodo,
            selectTodo,
            resetTodo,
            isSelected
        }}>
            {children}
        </ScreenContext.Provider>
    );
};

export default ScreenState;
