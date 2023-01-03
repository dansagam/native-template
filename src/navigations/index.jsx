import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigation from "./Auth";

const BaseNavigation = () => {
  const Stack = createNativeStackNavigator();
  const navigationOptions = { headerShown: false };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AuthNavigaitor"
        component={AuthNavigation}
        options={{ title: "Ooo", ...navigationOptions }}
      />
    </Stack.Navigator>
  );
};

export default BaseNavigation;
