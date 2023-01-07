import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AuthLayout from "views/auth/shared/AuthLayout";

const SignIn = () => {
  return (
    <AuthLayout>
      <View style={styles.container}>
        <Text>Sign in Screen</Text>
      </View>
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SignIn;
