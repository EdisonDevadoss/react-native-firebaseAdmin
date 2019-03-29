/* @flow */

import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import firebase from "react-native-firebase";

export default class SigninScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }
  onSignin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(res => {
        console.log("res is", res);
        alert("Signin Successfully");
      })
      .catch(error => {
        console.log("error is", error);
      });
  };
  render() {
    let isDisable =
      this.state.email && this.state.password
        ? false
        : true;
    return (
      <View style={styles.container}>
        <Text style={styles.signin}>Signin</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
          placeholder="Enter email"
        />

        <TextInput
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
          placeholder="Enter password"
          secureTextEntry
        />

        <Button
          style={styles.buttonStyle}
          title="Signin"
          onPress={this.onSignin}
          color={"purple"}
          disabled={isDisable}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  signin: {
    fontSize: 20,
    color: "green",
    textAlign: "center"
  },
  textInput: {
    // height: 50,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    fontSize: 15
  },
  buttonStyle: {
    height: 50,
    width: 100,
    color:'red'
  }
});
