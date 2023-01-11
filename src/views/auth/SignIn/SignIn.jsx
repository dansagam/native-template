import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";
import AuthLayout from "views/auth/shared/AuthLayout";
import AuthHeader from "views/auth/shared/AuthHeader";
import { Button, ControlledInput } from "shared";
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
        <View style={styles.topContainer}>
          <Text>Sign in Screen</Text>
          <View>
            <ControlledInput control={control} name="email" label="Email" />
            <ControlledInput control={control} name="password" label="Password" />
          </View>
        </View>
        <View style={styles.btn}>
          <Button label="Sign In" />
        </View>
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
  topContainer: {
    flex: 1,
  },
  btn: {
    flex: "auto",
  },
});

SignIn.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SignIn;
