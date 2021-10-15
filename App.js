import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Paginas

import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import Alfabeto from "./src/screens/Alfabeto";
import Cores from "./src/screens/Cores";
import Animais from "./src/screens/Animais";
import Alimentos from "./src/screens/Alimentos";
import Saudacoes from "./src/screens/Saudacoes";

const AppStack = createStackNavigator();

function AppRoutes() {
  return (
    <AppStack.Navigator headerMode="none" initialRouteName="Login">
      <AppStack.Screen name="Login" component={Login} />
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="Alfabeto" component={Alfabeto} />
      <AppStack.Screen name="Cores" component={Cores} />
      <AppStack.Screen name="Animais" component={Animais} />
      <AppStack.Screen name="Alimentos" component={Alimentos} />
      <AppStack.Screen name="Saudacoes" component={Saudacoes} />
    </AppStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
