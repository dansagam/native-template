import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import AuthLayout from "views/auth/shared/AuthLayout";
import AuthHeader from "views/auth/shared/AuthHeader";
import { useForm } from "react-hook-form";
import { Button, ControlledInput, Text } from "shared";

const Signup = ({ navigation }) => {
  const { control } = useForm();
  const handlePreviousPage = () => {
    navigation.navigate("Onboarding");
  };
  return (
    <AuthLayout>
      <View>
        <AuthHeader onPrevious={handlePreviousPage} />
        <View style={styles.inputContainer}>
          <ControlledInput
            control={control}
            name="firstname"
            label="First Name"
            placeholder="First Name"
          />
          <ControlledInput
            control={control}
            name="lastname"
            label="Last Name"
            placeholder="Last Name"
          />
          <ControlledInput
            control={control}
            name="phoneNumber"
            label="Phone No"
            placeholder="Phone No"
            isNumber
          />
          <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
            <Text color="primary.main" variant="body2" style={styles.forgotPassword}>
              forgot password?
            </Text>
          </TouchableOpacity>
          {/* <Text>Sign up screen</Text> */}
          <Button label="Register" size="large" />
        </View>
      </View>
    </AuthLayout>
  );
};

Signup.propTypes = {
  navigation: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

Signup.defaultProps = {
  navigation: {},
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    paddingVertical: 20,
    paddingHorizontal: 5,
  },
  forgotPassword: {
    marginVertical: 10,
  },
});
export default Signup;
