import {SafeAreaView} from "react-native-safe-area-context";
import {StyleSheet, View, Text} from "react-native";
import useCounter from '../store/useCounter'
import useName from "../store/useName";

export default function DisplayScreen () {
    const {count} = useCounter();
    const {name} = useName();


    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.nameText}>Hello {name}! Here your number:</Text>
                <Text style={styles.counterText}>{count}</Text>
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
    counterText: {
        fontSize: 70,
        fontWeight: "bold",
        textAlign: 'center'
    },
    nameText: {
        fontSize: 25,
        textAlign: 'center'
    }

});