/* eslint-disable react/prop-types */
import React from "react";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";

const Onboarding = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.content}> */}
      <View style={styles.topBar}>
        <Text>view the Onboarding screen</Text>
      </View>
      <View style={styles.midBar}>
        <Text>view the Onboarding screen</Text>
      </View>
      <View style={styles.lowBar}>
        <Text>view the Onboarding screen</Text>
        <Button title="Onboarding" onPress={() => navigation.navigate("SignIn")} />
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    padding: 20,
    justifyContent: "center",
  },
  topBar: {
    flex: 2,
  },
  midBar: {
    flex: 1.5,
  },
  lowBar: {
    flex: 0.5,
  },
  content: {
    flex: 1,
    padding: 20,
    textAlign: "center",
  },
});
export default Onboarding;
