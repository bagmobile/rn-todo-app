import React, {useState} from "react";
import {Dimensions, Modal, StyleSheet, TextInput, View} from "react-native";
import {THEME} from "../theme";
import {AppButton} from "./ui/AppButton";
import {AntDesign} from "@expo/vector-icons";

export const EditModal = ({value, isVisible, onCancel, onSave}) => {
    const [text, setText] = useState(value);
    const cancelHandler = () => {
        onCancel();
        setText(value);
    }
    return (
        <Modal
            animationType="fade"
            visible={isVisible}
            transparent={false}
            presentationStyle="overFullScreen"
        >
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter text"
                    autoCorrect={false}
                    autoCapitalize="none"
                    value={text}
                    onChangeText={setText}
                />
                <View style={styles.buttons}>
                    <AppButton style={styles.button} onPress={() => onSave(text)} color={THEME.EDIT_BUTTON_COLOR}>
                        <AntDesign name="checkcircleo" size={24}/>
                    </AppButton>
                    <AppButton style={styles.button} onPress={cancelHandler} color={THEME.DANGER_COLOR}>
                        <AntDesign name="closecircleo" size={24}/>
                    </AppButton>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    input: {
        paddingHorizontal: 5,
        marginVertical: 25,
        marginHorizontal: 10,
        borderColor: THEME.INPUT_BORDER,
        borderBottomWidth: 1,
        fontSize: 18
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    button: {
        width: Dimensions.get("window").width / 2 - 10
    }
});
