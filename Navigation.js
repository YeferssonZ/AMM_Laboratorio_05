import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './Screens/HomeScreen';
import NuevoDestinoScreen from './Screens/NuevoDestinoScreen';
import DestinoScreen from './Screens/DestinoScreen';

const HomeStack = createNativeStackNavigator();

const MyStack = () => {
    return (
      <HomeStack.Navigator initialRouteName="HomeScreen">
        <HomeStack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}  // Oculta el header para HomeScreen
        />
        <HomeStack.Screen
          name="NuevoDestino"
          component={NuevoDestinoScreen}
          options={{ headerTitle: 'Destinos' }} 
        />
        <HomeStack.Screen
          name="Stack"
          component={DestinoScreen}
        />
      </HomeStack.Navigator>
    );
  };

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Inicio') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Destino') {
              iconName = focused ? 'airplane' : 'airplane-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'purple',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Inicio" component={MyStack} />
        <Tab.Screen name="Destino" component={DestinoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
