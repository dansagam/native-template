import React from "react";
import PropTypes from "prop-types";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  View,
  Platform,
  StyleSheet,
  Dimensions,
} from "react-native";
import palette from "themes/palettes";

const AuthLayout = ({ children, containerStyles }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={styles.content}
    >
      <SafeAreaView style={styles.container}>
        <View style={[styles.content, containerStyles]}>{children}</View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
  containerStyles: PropTypes.object,
};

AuthLayout.defaultProps = {
  containerStyles: undefined,
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: palette.background.default,
    padding: 8,
  },

  content: {
    flex: 1,
    padding: 8,
  },
});

export default AuthLayout;
