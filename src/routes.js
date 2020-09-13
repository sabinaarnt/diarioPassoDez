import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import Home from './pages/Home'
import DozePassos from './pages/DozePassos'
import Oracao from './pages/Oracao'

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <NavigationContainer >
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = 'pencil-square-o'
                            return <FontAwesome name={iconName} size={size} color={color} />;

                        } else if (route.name === 'Oração da Serenidade') {
                            iconName = 'praying-hands'
                            return <FontAwesome5 name={iconName} size={size} color={color} />;

                        } else if (route.name === 'Os 12 Passos') {
                            iconName = 'shoe-print'
                            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                        }
                    },
                })}
            >
                <Tab.Screen name="Oração da Serenidade" component={Oracao} />
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Os 12 Passos" component={DozePassos} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
