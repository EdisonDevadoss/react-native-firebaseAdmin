/* @flow */

import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import firebase from "react-native-firebase";

export default class AdminScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", userName: "" };
  }
  onCreate = () => {
    const ref = firebase.database().ref("users");
    const serverTime = firebase.database().getServerTime();
    console.log("serverTime is", serverTime);
    let user = {};
    user[serverTime] = { ...this.state };
    ref
      .update(user)
      .then(res => {
        console.log("res", res);
        alert("Successfully created!");
      })
      .catch(error => {
        console.log("error", error);
      });
  };
  render() {
    let isDisable =
      this.state.email && this.state.password && this.state.userName
        ? false
        : true;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Create your Account</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
          placeholder="Enter email"
        />

        <TextInput
          style={styles.textInput}
          onChangeText={userName => this.setState({ userName })}
          value={this.state.userName}
          placeholder="Enter userName"
        />

        <TextInput
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
          placeholder="Enter password"
        />

        <Button
          title="Create Account"
          onPress={this.onCreate}
          color={"green"}
          disabled={isDisable}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    fontSize: 20,
    color: "green",
    textAlign: "center"
  },
  textInput: {
    fontSize: 15,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10
  }
});
