/* eslint-disable react/prop-types */
import React from "react";
import { StyleSheet, View, SafeAreaView, Pressable } from "react-native";
import { Button, Text } from "shared";
import palette from "themes/palettes";

// eslint-disable-next-line no-unused-vars
const Onboarding = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <View style={styles.topBar}>
          <Text variant="h1" color="common.white">
            Business Deal account
          </Text>
        </View>
        <View style={styles.midBar}>
          <Text variant="h5" color="common.white" style={styles.midText}>
            your journey to the financial wellness for the year 2023
          </Text>
        </View>
        <View style={styles.lowBar}>
          {/* <Button
            color="#2196F3"
            title="Onboarding"
            onPress={() => navigation.navigate("SignIn")}
          /> */}
          <Button
            label="Onboarding"
            onPress={() => navigation.navigate("SignUp")}
            size="large"
            inverse
            // variant="outlined"
          />
          <Pressable onPress={() => navigation.navigate("SignIn")} style={styles.accountBtn}>
            <Text variant="h5" color="common.white" style={styles.lowerText}>
              I already have an account
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.primary.main,
  },
  viewContainer: {
    flex: 1,
    padding: 10,
  },
  topBar: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  topBarText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
  },
  midBar: {
    flex: 1.5,
    justifyContent: "flex-start",
    alignItems: "center",
    color: "#fff",
  },
  midText: {
    textAlign: "center",
  },
  lowBar: {
    flex: 0.5,
    color: "blue",
  },
  content: {
    flex: 1,
    padding: 20,
    textAlign: "center",
  },
  buttonContainer: {
    backgroundColor: "#fff",
    color: "blue",
  },
  lowerText: {
    textAlign: "center",
    fontSize: 12,
  },
  accountBtn: {
    marginTop: 10,
  },
});
export default Onboarding;
