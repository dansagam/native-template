import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  // Text,
  // View,
  SafeAreaView,
  StatusBar as MobileStatusBar,
  Platform,
} from "react-native";
// import WelcomViews from "./src/views/WelcomViews";
import { NavigationContainer } from "@react-navigation/native";
// import WelcomViews from ""
import BaseNavigator from "./src/navigations/index";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {/* <View>
        <Text>dshdgh</Text>
      </View> */}
      {/* <MobileStatusBar barStyle="dark-content" backgroundColor="#F5F7FA" /> */}
      <NavigationContainer>
        <BaseNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    color: "#000",
    paddingTop: Platform.OS === "android" ? MobileStatusBar.currentHeight : 0,
  },
});
