import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreatePassword, ForgotPassword, Onboarding, SignIn, SignUp } from "views";

const AuthNavigation = () => {
  const Stack = createNativeStackNavigator();

  const screen = [
    {
      name: "Onboarding",
      screen: Onboarding,
      navigationOptions: {
        headerShown: false,
      },
    },
    {
      name: "SignIn",
      screen: SignIn,
      navigationOptions: {
        headerShown: false,
      },
    },
    {
      name: "SignUp",
      screen: SignUp,
      navigationOptions: {
        headerShown: false,
      },
    },
    {
      name: "ForgotPassword",
      screen: ForgotPassword,
      navigationOptions: {
        headerShown: false,
      },
    },
    {
      name: "CreatePassword",
      screen: CreatePassword,
      navigationOptions: {
        headerShown: false,
      },
    },
  ];
  // const navigationOptions = {
  //   headerShown: true,
  // };
  return (
    <Stack.Navigator>
      {screen.map((field, i) => (
        <Stack.Screen
          key={`${field.name}-${i}`}
          name={field.name}
          component={field.screen}
          options={{ title: "OverView", ...field.navigationOptions }}
        />
      ))}
    </Stack.Navigator>
  );
};

export default AuthNavigation;
