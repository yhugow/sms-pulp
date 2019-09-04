import { Alert } from 'react-native';

const Utils = {
  
    showAlert(title, message ) {
        Alert.alert(title, message, 
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
            )
    }
};

export default Utils;