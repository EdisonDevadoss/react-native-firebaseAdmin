import React from "react";
import PropTypes from "prop-types";
import { View, Text, Button } from "react-native";

const HomeScreen = props => {
  return (
    <View>
      <Text>Home Screen </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <Button title="Signin" />
        <Button title="Admin" />
      </View>
    </View>
  );
};

export default HomeScreen;
