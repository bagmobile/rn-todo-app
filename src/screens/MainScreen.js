import React, {useContext, useEffect, useCallback} from "react";
import {FlatList, Image, StyleSheet, View, Text} from "react-native";
import {AddToDo} from "../components/AddToDo";
import {ToDo} from "../components/ToDo";
import {TodoContext} from "../context/todo/todoContext";
import {ScreenContext} from "../context/screen/screenContext";
import {AppLoader} from "../components/ui/AppLoader";
import {AppError} from "../components/ui/AppError";

export const MainScreen = () => {
    const {todos, addTodo, removeTodo, fetchTodos, clearError, loading, error} = useContext(TodoContext);
    const {isSelected, selectTodo} = useContext(ScreenContext);

    const loadTodos = useCallback(async () => await fetchTodos(), [fetchTodos]);

    useEffect(() => {
        loadTodos();
    }, []);

    const renderItem = ({item}) => <ToDo
        todo={item}
        onRemove={removeTodo}
        onSelect={selectTodo}
    />;

    if (loading){
        return <AppLoader/>;
    }

    if (error){
        return (<AppError onReset={loadTodos}/>);
    }


    return !isSelected && (
        <View style={styles.container}>
            <AddToDo onAddTodo={addTodo}/>
            {todos && <FlatList style={styles.list}
                keyExtractor={item => item.id}
                data={todos}
                renderItem={renderItem}
            />}
            {todos.length === 0 && <View style={styles.imageWrap}>
                <Image style={styles.emptyImage} source={require("../../assets/empty.jpg")}/>
            </View>}
        </View>)
}

const styles = StyleSheet.create({
    container: {
    },
    list: {
        marginTop: 10
    },
    imageWrap: {
       // height: '100%',
        alignItems: 'center',
        //justifyContent: 'center',
       // padding: 20,
      //  backgroundColor: "blue"
    }
});
