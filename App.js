import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar as MobileStatusBar,
  Platform,
} from "react-native";
import WelcomViews from "./src/views/WelcomViews";
// import WelcomViews from ""

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WelcomViews />
      <View>
        <Text>dsjdjhsd</Text>
        <Text>Open up App.js to start worki justbhbshdbs on your app! to see dd</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff4ac",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? MobileStatusBar.currentHeight : 0,
  },
});
