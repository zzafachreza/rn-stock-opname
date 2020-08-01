import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

import Constants from "expo-constants";

export default function ListSk() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    await fetch("https://setiabudhi-supermarket.co.id/api/stockopname/")
      .then((response) => response.json())
      .then((a) => setData(a))
      .catch((error) => console.log(console.error()))
      .finally(() => setLoading(false));
  };

  console.log(getData());

  useEffect(getData, []);

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
              <View style={styles.card}>
                <Image style={styles.image} source={{ uri: item.image }} />
                <View style={styles.detailsContainer}>
                  <Text style={styles.title}>
                    {item.nomor}
                    {item.title}
                  </Text>
                  <Text style={styles.subTitle}>{item.price}</Text>
                </View>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#FFF",
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "#fcfcfc",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
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
