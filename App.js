import React, {useEffect, useState} from 'react';
import AppLoading from "expo-app-loading";
import {useFonts} from "expo-font";
import {Alert, StyleSheet, View} from 'react-native';

import {NavBar} from "./src/components/NavBar";
import {MainScreen} from "./src/screens/MainScreen";
import {ToDoScreen} from "./src/screens/ToDoScreen";


export default function App() {
    const [todos, setTodos] = useState([]);
    const [activeTodoId, setActiveTodoId] = useState(0);
    const [fontsLoaded] = useFonts({
        'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    });

    if (!fontsLoaded){
        return <AppLoading/>;
    }

    const addTodo = title => {
        setTodos(prev => [...prev, {
            id: Date.now().toString(),
            title
        }])
    }

    const saveTodo = (id, title) => {
        setTodos(prev => {
            return prev.map(todo => {
                return todo.id === id ? {id, title} : todo;
            })
        });
    }

    const getActiveTodo = () => {
        return todos.find(todo => todo.id === activeTodoId);
    }

    const deleteTodo = (id) => {
        Alert.alert(
            'Delete ToDo',
            'Do you really want to remove this ToDo?',
            [
                {
                    text: "Cancel",
                },
                {
                    text: "OK",
                    onPress: () => {
                        if (isToDoScreen()) {
                            goBack();
                        }
                        setTodos(prev => prev.filter(item => item.id !== id));
                        setActiveTodoId(0);
                    }
                }
            ],
            {cancelable: true}
        );
    }

    const isMainScreen = () => {
        return activeTodoId === 0;
    }

    const isToDoScreen = () => {
        return activeTodoId !== 0;
    }

    const goBack = () => {
        setActiveTodoId(0);
    }


    return (
        <View>
            <NavBar isMainScreen={isMainScreen()} goBack={goBack}/>
            <View style={styles.container}>
                {isMainScreen() && <MainScreen
                    addTodo={addTodo}
                    deleteTodo={deleteTodo}
                    todos={todos}
                    changeToDo={setActiveTodoId}
                />}
                {isToDoScreen() && <ToDoScreen
                    todo={getActiveTodo()}
                    goBack={goBack}
                    onDelete={deleteTodo}
                    onSave={saveTodo}
                />}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    }
})
