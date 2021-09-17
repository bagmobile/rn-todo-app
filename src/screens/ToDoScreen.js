import React, {useState} from "react";
import {StyleSheet, View} from "react-native";
import {THEME} from "../theme";
import {EditModal} from "../components/EditModal";
import {AppTextBold} from "../components/ui/AppTextBold";
import {AppButton} from "../components/ui/AppButton";
import {AntDesign} from "@expo/vector-icons";
import {DeleteAlert} from "../components/ui/DeleteAlert";

export const ToDoScreen = ({todo, goBack, removeTodo, updateTodo}) => {

    const [modal, setModal] = useState(false);

    return (
        <View style={styles.container}>
            <EditModal
                value={todo.title}
                isVisible={modal}
                onCancel={() => setModal(false)}
                onSave={title => {
                    updateTodo(todo.id, title);
                    setModal(false);
                }}
            />
            <View style={styles.card}>
                <AppTextBold>{todo.title}</AppTextBold>
                <View style={styles.buttons}>
                    <AppButton onPress={() => setModal(true)} color={THEME.EDIT_BUTTON_COLOR}>
                        <AntDesign name="edit"/>
                    </AppButton>
                    <AppButton onPress={() => {
                        DeleteAlert(() => removeTodo(todo.id));
                    }} color={THEME.DANGER_COLOR}>
                        <AntDesign name="delete"/>
                    </AppButton>
                </View>
            </View>
            <AppButton onPress={goBack} color={THEME.GO_BACK_COLOR}><AntDesign name="back"/></AppButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    card: {
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});
