import React, { useState, useEffect, useMemo, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AsyncStorage, Button, View, ActivityIndicator } from "react-native";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import Screen from "./app/components/Screen";
import store from "./app/api/store";
import { AuthContext } from "./app/auth/context";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const authContext = useMemo(
    () => ({
      signIn: (username) => {
        setUserToken(username);
        setIsLoading(false);
        setUser(username);
      },
      dataUser: userToken,
      singOut: () => {
        setUserToken(null);
        setIsLoading(false);
      },
      signUp: () => {
        setUserToken("reza");
        setIsLoading(false);
      },
    }),
    []
  );

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      // alert(userToken);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <AuthContext.Provider value={authContext}>
        {userToken !== null ? <AppNavigator /> : <AuthNavigator />}
      </AuthContext.Provider>
    </NavigationContainer>
  );
}
