import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View } from "react-native";
import AuthLayout from "views/auth/shared/AuthLayout";
import AuthHeader from "views/auth/shared/AuthHeader";
import { Button, ControlledInput, Text } from "shared";
import { useForm } from "react-hook-form";

const SignIn = ({ navigation }) => {
  const handlePrevPage = () => {
    navigation.navigate("SignUp");
  };
  const { control, handleSubmit } = useForm();

  const onSubmit = (values) => {
    console.log({ values });
  };
  return (
    <AuthLayout>
      <AuthHeader onPrevious={handlePrevPage} />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text variant="h4" color="primary.main">
            Sign In
          </Text>
          <View>
            <ControlledInput
              control={control}
              name="email"
              label="Email"
              placeholder="Enter Email address"
            />
            <ControlledInput
              control={control}
              name="password"
              label="Password"
              placeholder="Password"
            />
          </View>
        </View>
        <View style={styles.btn}>
          <Button label="Sign In" size="large" onPress={handleSubmit(onSubmit)} />
        </View>
      </View>
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 5,
  },
  topContainer: {
    flex: 1,
    marginTop: 20,
  },
  btn: {
    flex: 1,
  },
});

SignIn.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SignIn;
