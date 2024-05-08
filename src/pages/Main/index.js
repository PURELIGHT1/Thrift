import { View } from 'react-native';
import Beranda from '../Beranda';
import Chat from '../Chat';
import Pembayaran from '../Pembayaran';
import Profile from '../Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Octicons, Feather, MaterialCommunityIcons, FontAwesome6 } from '@expo/vector-icons';
import Header from '../Header';

const Tab = createBottomTabNavigator();

export default function Main({ navigation, route }) {
    return (
    <View style={{ 
      flex: 1, 
      backgroundColor: '#FFFFFF',
    }}>
        <Tab.Navigator
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    const iconTab = {
                        Beranda: <Octicons name="home" size={28} color={focused ? "#004AAD" : "gray"} />,
                        Pembayaran: <Feather name="shopping-cart" size={28} color={focused ? "#004AAD" : "gray"} />,
                        Chat: <MaterialCommunityIcons name="message-outline" size={28} color={focused ? "#004AAD" : "gray"} />,
                        Profile: <FontAwesome6 name="user" size={28} color={focused ? "#004AAD" : "gray"} />
                    };

                    return (
                        <View style={{width: 50, height: 50}}>
                          {iconTab[route.name]}
                        </View>
                    );
                },
                tabBarLabel: () => null,
                tabBarStyle: {
                  padding: 20,
                  backgroundColor: "white",
                  position: "absolute",
                  bottom: 20,
                  left: 20,
                  right: 20,
                  elevation: 5,
                  borderRadius: 50,
                  shadowColor: '#004AAD',
                  borderColor: '#004AAD',
                  shadowOpacity: 0.1,
                  borderWidth: 3,
                },
            })}
        >
            <Tab.Screen name="Beranda" component={Beranda} />
            <Tab.Screen name="Pembayaran" component={Pembayaran} />
            <Tab.Screen name="Chat" component={Chat} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    </View>
    )
}