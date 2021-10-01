import React from 'react';
import {AppText} from "./AppText";
import {View, StyleSheet, Button} from 'react-native';
import {THEME} from "../../theme";
import {AntDesign} from "@expo/vector-icons";

export const AppError = ({onReset}) => {
    return (
        <View style={styles.container}>
            <AppText style={styles.error}>Что-то пошло не так....</AppText>
            <AntDesign.Button name="reload1" onPress={onReset}>Reset</AntDesign.Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    error: {
        color: THEME.DANGER_COLOR,
        fontSize: 20,
        marginBottom: 10
    }

})

