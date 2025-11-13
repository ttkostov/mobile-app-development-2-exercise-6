import {SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context";
import {StyleSheet, View} from "react-native";
import {Button, TextInput} from 'react-native-paper';
import useCounter from '../store/useCounter'
import useName from "../store/useName";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function CounterScreen() {

    const {incrementCounter, decrementCounter, resetCounter} = useCounter();
    const {name, setName} = useName();

    const resetData = async () => {
        resetCounter();
        setName('');
        await AsyncStorage.clear();
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>

                <View style={styles.buttonContainer}>
                    <Button mode="contained" onPress={incrementCounter}>+</Button>
                    <Button mode="contained" onPress={decrementCounter}>-</Button>
                    <Button mode="contained" onPress={resetCounter} textColor="white">Reset</Button>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        mode="outlined"
                        label="Enter your name"
                        onChangeText={setName}
                        value={name ?? ''}
                        dense
                        style={styles.input}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Button mode="outlined" onPress={resetData}>Reset Data</Button>
                </View>

            </SafeAreaView>
        </SafeAreaProvider>

    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        gap: 40
    },
    buttonContainer: {
        width: '80%',
        flexDirection: 'column',
        justifyContent: 'space-around',
        gap: 10
    },
    inputContainer: {
        width: '80%',
        alignItems: 'center',
    },
    input: {
        width: '100%',
        height: 50, // ✅ forces proper height
        backgroundColor: '#fff',
    },
});