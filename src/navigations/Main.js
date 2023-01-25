import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "views/main/home/Home";
import Contact from "views/main/contact/Contact";
import Project from "views/main/project/Project";
const navigationOptions = { headerShown: false };
const Stack = createNativeStackNavigator();
const HomeScreen = [{ name: "Home", component: Home }];

const ContactScreen = [{ name: "Home", component: Contact }];

const ProjectScreen = [{ name: "Home", component: Project }];

const HomeStack = () => {
  return (
    <Stack.Navigator>
      {HomeScreen.map((field) => (
        <Stack.Screen
          key={field.name}
          name={field.name}
          component={field.component}
          options={navigationOptions}
        />
      ))}
    </Stack.Navigator>
  );
};

const ContactStack = () => {
  return (
    <Stack.Navigator>
      {ContactScreen.map((field) => (
        <Stack.Screen
          key={field.name}
          name={field.name}
          component={field.component}
          options={navigationOptions}
        />
      ))}
    </Stack.Navigator>
  );
};

const ProjectStack = () => {
  return (
    <Stack.Navigator>
      {ProjectScreen.map((field) => (
        <Stack.Screen
          key={field.name}
          name={field.name}
          component={field.component}
          options={navigationOptions}
        />
      ))}
    </Stack.Navigator>
  );
};

const MainNavigation = () => {
  const BottomTabs = createBottomTabNavigator();

  return (
    <BottomTabs.Navigator initialRouteName="HomeStack">
      <BottomTabs.Screen name="ProjectStack" component={ProjectStack} options={navigationOptions} />
      <BottomTabs.Screen name="HomeStack" component={HomeStack} options={navigationOptions} />
      <BottomTabs.Screen name="ContactStack" component={ContactStack} options={navigationOptions} />
    </BottomTabs.Navigator>
  );
};

export default MainNavigation;
