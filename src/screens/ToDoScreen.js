import React, {useContext, useState} from "react";
import {StyleSheet, View} from "react-native";
import {THEME} from "../theme";
import {EditModal} from "../components/EditModal";
import {AppTextBold} from "../components/ui/AppTextBold";
import {AppButton} from "../components/ui/AppButton";
import {AntDesign} from "@expo/vector-icons";
import {DeleteAlert} from "../components/ui/DeleteAlert";
import {TodoContext} from "../context/todo/todoContext";
import {ScreenContext} from "../context/screen/screenContext";

export const ToDoScreen = () => {
    const {removeTodo, updateTodo, error, clearError} = useContext(TodoContext);
    const {todo, isSelected, resetTodo} = useContext(ScreenContext);

    const [modal, setModal] = useState(false);

    const saveHandler = title => {
        updateTodo(todo.id, title);
        setModal(false);
    }

    const goBackHandler = () => {
        clearError();
        resetTodo();
    }

    return isSelected && (
        <View style={styles.container}>
            <EditModal
                value={todo.title}
                isVisible={modal}
                onCancel={() => setModal(false)}
                onSave={saveHandler}
                error={error}
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
            {error && <AppTextBold color={THEME.DANGER_COLOR}>Error - {error}</AppTextBold>}
            <AppButton onPress={goBackHandler} color={THEME.GO_BACK_COLOR}><AntDesign name="back"/></AppButton>
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
