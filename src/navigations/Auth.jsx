import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreatePassword, ForgotPassword, Onboarding, SignIn, SignUp } from "views";
import { AuthLogo } from "shared";
// import palette from "themes/palettes";

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
    },
    {
      name: "SignUp",
      screen: SignUp,
    },
    {
      name: "ForgotPassword",
      screen: ForgotPassword,
    },
    {
      name: "CreatePassword",
      screen: CreatePassword,
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
          options={{
            title: "OverView",
            headerTitle: (props) => <AuthLogo {...props} />,
            headerShown: true,
            headerTitleAlign: "center",
            ...field.navigationOptions,
          }}
        />
      ))}
    </Stack.Navigator>
  );
};

export default AuthNavigation;
