/* eslint-disable no-undef */
import React from "react";
// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  // Text,
  // View,
  // SafeAreaView,
  StatusBar as MobileStatusBar,
  // Platform,
  View,
} from "react-native";
// import WelcomViews from "./src/views/WelcomViews";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// import WelcomViews from ""
import BaseNavigator from "./navigations/index";
import palette from "./themes/palettes";

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: palette.background.default,
    card: palette.background.paper,
    primary: palette.primary.main,
  },
};
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
    "Ubuntu-Bold": require("./assets/fonts/ubuntu/Ubuntu-Bold.ttf"),
    "Ubuntu-Light": require("./assets/fonts/ubuntu/Ubuntu-Light.ttf"),
    "Ubuntu-Regular": require("./assets/fonts/ubuntu/Ubuntu-Regular.ttf"),
    "Ubuntu-Medium": require("./assets/fonts/ubuntu/Ubuntu-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <MobileStatusBar barStyle="dark-content" backgroundColor={palette.background.default} />
      <QueryClientProvider client={queryClient}>
        {/* <SafeAreaView> */}
        {/* <StatusBar style="auto" /> */}
        <NavigationContainer theme={AppTheme}>
          <BaseNavigator />
        </NavigationContainer>
        {/* </SafeAreaView> */}
      </QueryClientProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.background.default,
    // paddingTop: Platform.OS === "android" ? MobileStatusBar.currentHeight : 0,
  },
});
