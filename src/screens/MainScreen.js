import React from "react";
import {FlatList, Image, StyleSheet, Text, View} from "react-native";
import {AddToDo} from "../components/AddToDo";
import {ToDo} from "../components/ToDo";

export const MainScreen = ({todos, addTodo, deleteTodo, changeToDo}) => {

    const renderItem = ({item}) => <ToDo
        todo={item}
        onDelete={deleteTodo}
        onSelect={changeToDo}
    />;

    return (
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
    container: {},
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
