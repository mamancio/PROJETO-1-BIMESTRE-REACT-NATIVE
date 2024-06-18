import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Cards from './pages/Cards';
import Personagem from './pages/Personagem';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{
                            headerShown: true,
                            tabBarVisible: false
                        }}
                    />

                    <Stack.Screen
                        name="Cadastro"
                        component={Cadastro}
                        options={{
                            headerShown: true,
                            tabBarVisible: false
                        }}
                    />

                    <Stack.Screen
                        name="Cards"
                        component={Cards}
                        options={{
                            title: 'CARDS',
                            headerTitleAlign: 'center',
                            headerTitleStyle: {
                                color: '#fff',
                            },
                        }}
                    />

                    <Stack.Screen
                        name="Personagem"
                        component={Personagem}
                        options={({ route }) => ({
                            title: route.params?.character?.name.toUpperCase() || 'DETALHE',
                            headerTitleAlign: 'center',
                            headerTitleStyle: {
                                color: '#fff',
                            },
                        })}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>

    );
}