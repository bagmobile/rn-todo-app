import React from 'react';
import {Platform, StyleSheet, TouchableNativeFeedback, TouchableOpacity, View} from "react-native";
import {THEME} from "../../theme";
import {AppText} from "./AppText";

export const  AppButton = ({children, onPress, color = THEME.MAIN_COLOR, style}) => {
    const button = (
        <View style={{...styles.button, ...style, backgroundColor: color}}>
            <AppText style={styles.text}>{children}</AppText>
        </View>
    );
    const isiOS = Platform.OS === 'ios';

    return (isiOS
        ? <TouchableOpacity onPress={onPress} activeOpacity={0.7}>{button}</TouchableOpacity>
        : <TouchableNativeFeedback onPress={onPress}>{button}</TouchableNativeFeedback>);

};

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        //marginHorizontal: 2
    },
    text: {
        color: '#fff'
    }
});
