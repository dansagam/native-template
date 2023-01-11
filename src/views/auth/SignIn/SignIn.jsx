import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";
import AuthLayout from "views/auth/shared/AuthLayout";
import AuthHeader from "views/auth/shared/AuthHeader";
import { ControlledInput } from "shared";
import { useForm } from "react-hook-form";

const SignIn = ({ navigation }) => {
  const handlePrevPage = () => {
    navigation.navigate("SignUp");
  };
  const { control } = useForm();
  return (
    <AuthLayout>
      <AuthHeader onPrevious={handlePrevPage} />
      <View style={styles.container}>
        <Text>Sign in Screen</Text>
      </View>
      <View>
        <ControlledInput control={control} name="email" label="Email" />
      </View>
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
});

SignIn.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SignIn;
