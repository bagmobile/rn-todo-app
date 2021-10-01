import React from 'react';
import {NavBar} from "./components/NavBar";
import {StyleSheet, View} from "react-native";
import {MainScreen} from "./screens/MainScreen";
import {ToDoScreen} from "./screens/ToDoScreen";


export const MainLayout = () => {

    return (
        <View style={styles.container}>
            <NavBar/>
            <View style={styles.screen}>
                <MainScreen/>
                <ToDoScreen/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    screen: {
        margin: 10,
        flex: 1
    }
});

