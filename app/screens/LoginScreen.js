import React, { useContext } from "react";
import { StyleSheet, Image, AsyncStorage, Button } from "react-native";
// import AsyncStorage from "@react-native-community/async-storage";
import * as Yup from "yup";
import axios from "axios";
import store from "../api/store";
import { AuthContext } from "../auth/context";
import Screen from "../components/Screen";
import { Form, FormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  password: Yup.string().required().min(3).label("Password"),
});

function LoginScreen(props) {
  const { signIn } = useContext(AuthContext);

  const handleSubmit = ({ username, password }) => {
    const data = new FormData();
    data.append("username", username);
    data.append("password", password);
    axios({
      method: "post",
      url: "https://setiabudhi-supermarket.co.id/api/stockopname/",
      data,
    }).then((res) => {
      if (res.data.password === 404) {
        alert("Password is Wrong !");
      } else {
        // alert("berhasil Login");
        store.storeData(res.data.username);
        signIn(res.data.username);
      }
    });
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Form
        initialValues={{ username: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="account"
          name="username"
          placeholder="Username"
          textContentType="username"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
