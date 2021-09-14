import React from "react";
import {StyleSheet, View, Platform} from "react-native";
import {THEME} from "../theme";
import {AppTextBold} from "./ui/AppTextBold";

export const NavBar = () => {
    return (
        <View style={{...styles.container, ...Platform.select({
                ios: styles.navbarIos,
                android: styles.navbarAndroid
            })}}>
            <AppTextBold style={styles.title}> My ToDo App </AppTextBold>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 25,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    navbarIos: {
        backgroundColor: '#FFF',
        borderBottomWidth: 1,
    },
    navbarAndroid: {
        backgroundColor: THEME.MAIN_COLOR,
    },
    title: {
        color: Platform.OS === "android" ? '#fff' : THEME.MAIN_COLOR
    }
})
