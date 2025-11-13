import {SafeAreaView} from "react-native-safe-area-context";
import {StyleSheet, View, Text} from "react-native";
import {Button, TextInput} from 'react-native-paper';
import useCounter from '../store/useCounter'
import useName from "../store/useName";


export default function CounterScreen() {

    const {count, incrementCounter, decrementCounter, resetCounter} = useCounter();
    const {name, setName} = useName();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button mode="contained"
                        onPress={incrementCounter}>
                    ➕</Button>
                <Button mode="contained"
                        onPress={decrementCounter}>
                    ➖</Button>
                <Button mode="contained"
                        onPress={resetCounter}>
                    Reset</Button>

            </View>
            <View style={styles.buttonContainer}>
                <TextInput
                    style={styles.input}
                    mode="outlined"
                    label="Enter your name"
                    onChangeText={setName}
                />
            </View>
        </SafeAreaView>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },
    input: {
       backgroundColor: '#fff',
    }
});