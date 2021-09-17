import {Alert} from "react-native";

export const DeleteAlert = (onDeleteAction) => {
    Alert.alert(
        'Delete ToDo',
        'Do you really want to remove this ToDo?',
        [
            {
                text: "Cancel",
            },
            {
                text: "OK",
                onPress: () => {
                    onDeleteAction();
                }
            }
        ],
        {cancelable: true}
    );
}
