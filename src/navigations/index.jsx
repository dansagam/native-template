import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigation from "./Auth";
import MainNavigation from "./Main";

const BaseNavigation = () => {
  const Stack = createNativeStackNavigator();
  const navigationOptions = { headerShown: false };
  const isLoggedIn = false;
  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <Stack.Screen
          name="AuthNavigaitor"
          component={AuthNavigation}
          options={{ title: "Ooo", ...navigationOptions }}
        />
      ) : (
        <Stack.Screen
          name="MainNavigation"
          component={MainNavigation}
          options={{ title: "Ooo", ...navigationOptions }}
        />
      )}
    </Stack.Navigator>
  );
};

export default BaseNavigation;
