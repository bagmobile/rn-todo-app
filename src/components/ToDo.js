import React from "react";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {AppText} from "./ui/AppText";
import {DeleteAlert} from "./ui/DeleteAlert";


export const ToDo = ({todo, onRemove, onSelect}) => {

    return (
        <TouchableOpacity
            onPress={() => onSelect(todo.id)}
            onLongPress={() => DeleteAlert(() => onRemove(todo.id))}
        >
            <View style={styles.container}>
                <AppText style={styles.text}>{todo.title}</AppText>
            </View>
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 2,
        marginTop: 5,
        padding: 10
    },
    text: {
        fontSize: 18
    }
})
