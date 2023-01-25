import React from "react";
import { Image, StyleSheet, View } from "react-native";
import reactLogo from "assets/icon.png";

const AuthLogoTitle = () => {
  return (
    <View style={styles.container}>
      <Image style={{ width: 30, height: 30 }} source={reactLogo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // width: "100%",
  },
});

export default AuthLogoTitle;
