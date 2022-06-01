import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeLoginScreen from "../screens/HomeLoginScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import NextSignupScreen from "../screens/NextSignupScreen";
import SuccessCreateScreen from "../screens/SuccessCreateScreen";


const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Accueil">
            <Stack.Screen name="Accueil" options={{ headerShown: false }} component={HomeLoginScreen} />
            <Stack.Screen name="Connexion"
                options={{
                    title: 'Login',
                    headerTitleAlign: 'center',
                    headerTitleStyle: { color: '#000', fontSize: 24, fontWeight: 'bold' },
                    headerStyle: {
                        backgroundColor: '#fff',
                    },
                }} component={LoginScreen} />
            <Stack.Screen name="Sign Up"
                options={{
                    title: 'Inscription',
                    headerTitleAlign: 'center',
                    headerTitleStyle: { color: '#000', fontSize: 24, fontWeight: 'bold' },
                    headerStyle: {
                        backgroundColor: '#fff',
                    },
                }} component={SignupScreen} />
            <Stack.Screen name="NextInscription" 
                            options={{
                                title: 'Inscription',
                                headerTitleAlign: 'center',
                                headerTitleStyle: { color: '#000', fontSize: 24, fontWeight: 'bold' },
                                headerStyle: {
                                    backgroundColor: '#fff',
                                },
                            }} component={NextSignupScreen} />
            <Stack.Screen name="Success" options={{ headerShown: false }} component={SuccessCreateScreen} />
        </Stack.Navigator>
    );
}


export default StackNavigation;