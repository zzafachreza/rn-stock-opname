import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AsyncStorage } from "react-native";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import store from "./app/api/store";

export default function App() {
  let userAuth = store.getData();

  return (
    <NavigationContainer theme={navigationTheme}>
      {userAuth !== null ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
