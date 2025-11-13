import {StatusBar} from 'expo-status-bar';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CounterScreen from "./screens/CounterScreen";
import DisplayScreen from "./screens/DisplayScreen";
import {Provider as PaperProvider} from 'react-native-paper';


const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <PaperProvider>
            <NavigationContainer>
                {
                    <Tab.Navigator id='main-tab-navigator'
                                   screenOptions={{
                                       headerShown: false,
                                       tabBarIconStyle: {marginBottom: 7},
                                       tabBarLabelStyle: {fontSize: 15},
                                   }}
                    >
                        <Tab.Screen name="Counter"
                                    component={CounterScreen}
                                    options={{
                                        tabBarIcon: ({color, size}) => (
                                            <Text style={{color: color, fontSize: size}}>🔢️</Text>
                                        )
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
                }
            </NavigationContainer>
            <StatusBar/>

        </PaperProvider>
    );
}