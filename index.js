// import { AppRegistry } from "react-native";
import App from "./src/App";
// import { name as appName } from "./app.json";
import { registerRootComponent } from "expo";

// AppRegistry.registerComponent(appName, () => App);
//
// "main": "node_modules/expo/AppEntry.js",  to put in package json file
registerRootComponent(App);
