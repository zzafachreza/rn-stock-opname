import React from "react";
import { AsyncStorage } from "react-native";

const getData = async () => {
  try {
    let user = await AsyncStorage.getItem("user");
  } catch (error) {
    console.log(error);
  }
};

const storeData = (value) => {
  let user = value;
  AsyncStorage.setItem("user", user);
};

const removeData = () => {
  AsyncStorage.removeItem("user");
};

export default {
  getData,
  storeData,
  removeData,
};
