import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

function lokasi() {
  return (
    <View>
      <Text>Lokasi</Text>
    </View>
  );
}

function Root() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="lokasi" component={lokasi} />
    </Stack.Navigator>
  );
}

export default function ScreenList() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  async function myAsyncEffect() {
    await fetch("https://setiabudhi-supermarket.co.id/api/stockopname/")
      .then((response) => response.json())
      .then((a) => setData(a))
      .catch((error) => console.log(console.error()))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    myAsyncEffect();
  }, []);
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.container}>
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={Root}>
                <View style={styles.card}>
                  <MaterialCommunityIcons
                    name="cube"
                    color={colors.primary}
                    size={25}
                  />
                  <View style={styles.detailsContainer}>
                    <Text style={styles.title}>{item.sk}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  card: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    width: "100%",
    borderRadius: 50,
    overflow: "hidden",
    backgroundColor: colors.light,
    marginVertical: 10,
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
