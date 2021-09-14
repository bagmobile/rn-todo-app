import React, {useState} from "react";
import {Alert, StyleSheet, TextInput, View, Keyboard} from "react-native";
import {AntDesign} from "@expo/vector-icons";

export const AddToDo = ({onAddTodo}) => {
    const [text, setText] = useState('');

    const pressHandler = () => {
        if (text.trim()) {
            onAddTodo(text);
            setText('');
            Keyboard.dismiss();
        } else {
            Alert.alert('Not Empty')
        }

    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={text => setText(text)}
                value={text}
                placeholder="Enter value"
                autoCorrect={false}
                autoCapitalize="words"
            />
            {/*<Ionicons name="add-circle-outline" size={36} color={theme.ADD_BUTTON_COLOR} onPress={pressHandler}/>*/}
            <AntDesign.Button name="pluscircleo" onPress={pressHandler}>Add</AntDesign.Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    input: {
        flexGrow: 1,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderColor: '#555c5b',
        marginRight: 10
    }
})
