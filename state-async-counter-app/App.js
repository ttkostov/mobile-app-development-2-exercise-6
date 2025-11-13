import {StatusBar} from 'expo-status-bar';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeBottomTabNavigator} from '@react-navigation/bottom-tabs/unstable';
import CounterScreen from "./screens/CounterScreen";
import DisplayScreen from "./screens/DisplayScreen";
import {Provider as PaperProvider} from 'react-native-paper';


const Tab = createNativeBottomTabNavigator();

export default function App() {
    return (
        <PaperProvider>
            <StatusBar/>
            <NavigationContainer>

                <Tab.Navigator>
                    <Tab.Screen name="Counter"
                                component={CounterScreen}
                                options={{

                                    tabBarIcon: {
                                        type: "drawableResource",
                                        name: "heart_icon"
                                    }
                                }}/>
                    <Tab.Screen
                        name="Display"
                        component={DisplayScreen}
                        options={{
                            tabBarIcon: ({color, size}) => (
                                <Text style={{color: color, fontSize: size}}>🖥️</Text>
                            )
                        }}
                    />
                </Tab.Navigator>

            </NavigationContainer>
        </PaperProvider>
    );
}