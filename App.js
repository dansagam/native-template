/* eslint-disable no-undef */
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
import { useFonts } from "expo-font";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// import WelcomViews from ""
import BaseNavigator from "./src/navigations/index";
import palette from "./src/themes/palettes";

export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        cacheTime: 60000,
        refetchOnWindowFocus: false,
      },
    },
  });
  const [fontsLoaded] = useFonts({
    "Ubuntu-Bold": require("./src/assets/fonts/ubuntu/Ubuntu-Bold.ttf"),
    "Ubuntu-Light": require("./src/assets/fonts/ubuntu/Ubuntu-Light.ttf"),
    "Ubuntu-Regular": require("./src/assets/fonts/ubuntu/Ubuntu-Regular.ttf"),
    "Ubuntu-Medium": require("./src/assets/fonts/ubuntu/Ubuntu-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <BaseNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.background.default,
    paddingTop: Platform.OS === "android" ? MobileStatusBar.currentHeight : 0,
  },
});
