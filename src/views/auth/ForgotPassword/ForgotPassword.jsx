import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View } from "react-native";
import AuthLayout from "views/auth/shared/AuthLayout";
import AuthHeader from "views/auth/shared/AuthHeader";
import { Button, ControlledInput, Text } from "shared";
import { useForm } from "react-hook-form";

const ForgotPassword = ({ navigation }) => {
  const handlePreviousPage = () => {
    navigation.navigate("SignIn");
  };
  const { control, handleSubmit } = useForm();

  const onSubmit = (values) => {
    console.log({ values });
  };
  return (
    <AuthLayout>
      <AuthHeader onPrevious={handlePreviousPage} />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text variant="h4" color="primary.main">
            Forgot Password?
          </Text>
          <Text color="primary.light" style={styles.subtitle} variant="body1">
            We&lsquo;ll send you an access recovery pin to the email provided for the resetting your
            password
          </Text>
          <View style={styles.inputContainer}>
            <ControlledInput
              control={control}
              name="email"
              label="Email Address"
              placeholder="Enter email address here"
            />
          </View>
        </View>
        <View style={styles.btn}>
          <Button label="Send Link" size="large" onPress={handleSubmit(onSubmit)} />
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
  inputContainer: {
    // paddingVertical: 20,
  },
  topContainer: {
    flex: 1,
  },
  subtitle: {
    fontSize: 14,
    marginVertical: 8,
  },
  btn: {
    flex: "auto",
  },
});

ForgotPassword.propTypes = {
  navigation: PropTypes.object.isRequired,
};
export default ForgotPassword;
