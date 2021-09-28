import React from 'react';
import {NavBar} from "./components/NavBar";
import {StyleSheet, View} from "react-native";
import {MainScreen} from "./screens/MainScreen";
import {ToDoScreen} from "./screens/ToDoScreen";


export const MainLayout = () => {

    return (
        <View>
            <NavBar/>
            <View style={styles.container}>
                <MainScreen/>
                <ToDoScreen/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10
    }
});

