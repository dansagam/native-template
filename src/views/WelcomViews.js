import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { GGG } from "constants/helper";
import backgrou from "assets/splash.png";

const WelcomViews = () => {
  console.log({ GGG });
  return <ImageBackground style={styles.bacground} source={backgrou}></ImageBackground>;
};

const styles = StyleSheet.create({
  bacground: {
    flex: 1,
  },
});

export default WelcomViews;
