import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Signup = () => {
  return (
    <View style={styles.container}>
      <Text>Sign up screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Signup;
