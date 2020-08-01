import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import Screen from "./assets/components/Screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ScreenInput from "./assets/screens/ScreenInput";
import ScreenList from "./assets/screens/ScreenList";
import ScreenStatus from "./assets/screens/ScreenStatus";

function HomeScreen({ navigation }) {
  return (
    <Screen>
      <TouchableOpacity onPress={() => navigation.navigate("Input")}>
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={{
              uri:
                "https://cdn.searchenginejournal.com/wp-content/uploads/2017/09/F377BC27-8137-413B-BB70-2524271546AE-760x400.jpeg",
            }}
          />
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>Input / Scan</Text>
            <Text style={styles.subTitle}>
              melakukan scanning terhadap product
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={{
              uri:
                "https://www.employmenthelp.org/wp-content/uploads/Workshops-Header-Background.png",
            }}
          />
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>List Stock Opname</Text>
            <Text style={styles.subTitle}>
              List Stock Opname yang sudah di Input
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Status")}>
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={{
              uri:
                "https://www.employmenthelp.org/wp-content/uploads/Meet-The-Team-Header-Background.png",
            }}
          />
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>Lokasi Yang Sudah</Text>
            <Text style={styles.subTitle}></Text>
          </View>
        </View>
      </TouchableOpacity>
    </Screen>
  );
}

function InputScreen() {
  return <ScreenInput />;
}

function ListScreen() {
  return <ScreenList />;
}

function StatusScreen() {
  return <ScreenStatus />;
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="Input" component={InputScreen} />
        <Stack.Screen
          name="List"
          component={ListScreen}
          options={{
            headerShown: true,
            headerTitle: "Pilih SK Number",
          }}
        />
        <Stack.Screen name="Status" component={StatusScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "#fcfcfc",
    marginHorizontal: 20,
    marginTop: 20,
  },
  image: {
    width: "100%",
    height: 120,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: "grey",
    fontWeight: "bold",
  },
});
