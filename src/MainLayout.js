import React, {useContext} from 'react';
import {NavBar} from "./components/NavBar";
import {StyleSheet, View} from "react-native";
import {MainScreen} from "./screens/MainScreen";
import {ToDoScreen} from "./screens/ToDoScreen";
import {TodoContext} from "./context/todo/todoContext";


export const MainLayout = () => {
    const {todos, activeTodo, addTodo, removeTodo, selectTodo, resetTodo, updateTodo} = useContext(TodoContext);

    const isMainScreen = () => {
        return activeTodo === null;
    }

    const getActiveTodo = () => {
        return todos.find(todo => todo.id === activeTodo);
    }

    return (
        <View>
            <NavBar/>
            <View style={styles.container}>
                {isMainScreen() ? <MainScreen
                        todos={todos}
                        addTodo={addTodo}
                        removeTodo={removeTodo}
                        selectTodo={selectTodo}
                    /> :
                    <ToDoScreen
                        todo={getActiveTodo()}
                        goBack={resetTodo}
                        removeTodo={removeTodo}
                        updateTodo={updateTodo}
                    />}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10
    }
});

