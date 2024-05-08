import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { 
    BerandaPage, 
    LoginPage, 
    Main,
    PembayaranPage,
    ChatPage,
    ProfilePage,
} from '../../pages';

const Stack = createNativeStackNavigator();

export default function Router() {
    return (
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{
                headerShown: false,
            }}
            screenListeners={{
                state: (data) => {
                    // console.log('screen', JSON.stringify(data, null, 2));
                },
            }}
        >
            <Stack.Screen name='Main' component={Main}></Stack.Screen>
            <Stack.Screen name='Login' component={LoginPage}></Stack.Screen>
            <Stack.Screen name='Beranda' component={BerandaPage}></Stack.Screen>
            <Stack.Screen name='Pembayaran' component={PembayaranPage}></Stack.Screen>
            <Stack.Screen name='Chat' component={ChatPage}></Stack.Screen>
            <Stack.Screen name='Profile' component={ProfilePage}></Stack.Screen>
        </Stack.Navigator>
    );
}
