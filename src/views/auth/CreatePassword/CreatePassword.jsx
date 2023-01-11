import React from "react";
import { StyleSheet, View } from "react-native";
import AuthLayout from "views/auth/shared/AuthLayout";
import { Button, ControlledInput, Text } from "shared";
import { useForm } from "react-hook-form";

const CreatePassword = () => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (values) => {
    console.log({ values });
  };
  return (
    <AuthLayout>
      <View style={styles.container}>
        <View>
          <Text>Create Password</Text>
          <Text>
            Create your password in the screen by puttin in your password and confirming your
            password.
          </Text>
          <View>
            <ControlledInput
              control={control}
              name="password"
              label="Password"
              placeholder="Password"
            />
            <ControlledInput
              control={control}
              name="confirmPassword"
              label="Confirm Password"
              placeholder="Confirm Password"
            />
          </View>
        </View>
        <View>
          <Button label="Create Password" onPress={handleSubmit(onSubmit)} />
        </View>
      </View>
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default CreatePassword;
