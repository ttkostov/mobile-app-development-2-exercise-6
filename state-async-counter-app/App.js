import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeBottomTabNavigator} from '@react-navigation/bottom-tabs/unstable';
import CounterScreen from "./screens/CounterScreen";
import DisplayScreen from "./screens/DisplayScreen";
import {Provider as PaperProvider} from 'react-native-paper';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Platform} from "react-native";


const Tab = Platform.OS === 'web'
    ? createBottomTabNavigator()
    : createNativeBottomTabNavigator();


export default function App() {
    return (
        <PaperProvider>
            <StatusBar/>
            <NavigationContainer>

                <Tab.Navigator>
                    <Tab.Screen name="Counter"
                                component={CounterScreen}/>
                    <Tab.Screen
                        name="Display"
                        component={DisplayScreen}
                    />
                </Tab.Navigator>

            </NavigationContainer>
        </PaperProvider>
    );
}