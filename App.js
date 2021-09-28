import React from 'react';
import AppLoading from "expo-app-loading";
import {useFonts} from "expo-font";
import {MainLayout} from "./src/MainLayout";
import {TodoState} from "./src/context/todo/TodoState";
import ScreenState from "./src/context/screen/ScreenState";


export default function App() {
    const [fontsLoaded] = useFonts({
        'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading/>;
    }

    return (
        <ScreenState>
            <TodoState>
                <MainLayout/>
            </TodoState>
        </ScreenState>
    );
}

