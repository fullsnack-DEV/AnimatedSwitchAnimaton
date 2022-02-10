import React from "react";
import { SliderComponent, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Src/Screens/HomeScreen";
import SwitchAnimation from "./Src/Screens/SwitchAnimation";
import SlidingCounter from "./Src/Screens/SlidingCounterAnimation";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SwitchScreen" component={SwitchAnimation} />
        <Stack.Screen name="SlidingScreen" component={SlidingCounter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//Moti Animation

//From     //Animate   //transition
