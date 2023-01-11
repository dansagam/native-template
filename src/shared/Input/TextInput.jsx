import React from "react";
import PropTypes from "prop-types";
import { View, TextInput as NativeTextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "shared";
import palette from "themes/palettes";
import { onNumberValidator } from "utils/numberFormatter";

const TextInput = ({
  label,
  onChangeText,
  multiline,
  value,
  placeholder,
  error,
  helperText,
  isNumber,
  isCurrency,
  isFormatted,
  labelStyle,
  secureVisibility,
  style,
  RightIcon,
  leftIcon,
  ...props
}) => {
  const [focused, setFocused] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <View
      style={{
        borderWidth: focused ? 2 : 1,
        borderColor: focused ? palette.primary.main : palette.grey[200],
        borderRadius: 4,
        width: "100%",
        height: multiline ? 100 : 50,
        backgroundColor: "transparent",
        marginVertical: 18,
        paddingVertical: multiline ? 10 : 5,
        paddingHorizontal: 10,
        position: "relative",
        flexDirection: "row",
        zIndex: 1000,
        ...(error && {
          borderColor: palette.error.main,
        }),
      }}
    >
      {label && value !== "" && (
        <Text
          variant="h4"
          style={{
            ...styles.container,
            position: "absolute",
            left: 5,
            top: -18,
            backgroundColor: "#fff",
            paddingHorizontal: 5,
            fontSize: 12,
            width: "25%",
            ...labelStyle,
          }}
          color={error ? "error.main" : focused ? "primary.main" : "text.secondary"}
        >
          {label}
        </Text>
      )}
      {isCurrency ? (
        <Text style={[styles.leftBtnVisibility, { marginLeft: 10 }]}>₦</Text>
      ) : (
        leftIcon && <View style={[styles.leftBtnVisibility, { marginLeft: 10 }]}>{leftIcon}</View>
      )}
      <NativeTextInput
        onChangeText={(val) => {
          if (onChangeText) {
            if (isNumber) {
              onNumberValidator(val, onChangeText, isFormatted, isCurrency);
            } else {
              onChangeText(val);
            }
          }
        }}
        value={value}
        multiline={multiline}
        editable
        placeholder={placeholder}
        secureTextEntry={secureVisibility && !showPassword}
        placeholderTextColor={palette.secondary.main}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          zIndex: 3000,
          ...style,
        }}
        keyboardType={isNumber ? "numeric" : "default"}
        {...props}
      />
      {secureVisibility ? (
        <TouchableOpacity
          onPress={() => setShowPassword(() => !showPassword)}
          style={[styles.rightBtnVisibility, { marginLeft: 10 }]}
        >
          <Ionicons
            color={palette.secondary.light}
            size={22}
            name={showPassword ? "ios-eye-off" : "ios-eye"}
          />
        </TouchableOpacity>
      ) : (
        RightIcon && (
          <View style={[styles.rightBtnVisibility, { marginLeft: 10 }]}>{RightIcon}</View>
        )
      )}
      {(helperText || error) && (
        <View>
          <Text variant="body2" style={styles.errorContainer}>
            {helperText}
          </Text>
        </View>
      )}
    </View>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
  multiline: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  error: PropTypes.bool,
  secureVisibility: PropTypes.bool,
  helperText: PropTypes.string,
  labelStyle: PropTypes.oneOfType([PropTypes.object]),
  style: PropTypes.oneOfType([PropTypes.object]),
  isNumber: PropTypes.bool,
  isCurrency: PropTypes.bool,
  isFormatted: PropTypes.bool,
  RightIcon: PropTypes.node,
  leftIcon: PropTypes.node,
};

TextInput.defaultProps = {
  label: "",
  onChangeText: () => {},
  placeholder: "",
  multiline: false,
  value: "",
  error: false,
  secureVisibility: false,
  helperText: "",
  labelStyle: {},
  style: {},
  isNumber: false,
  isCurrency: false,
  isFormatted: false,
  RightIcon: <></>,
  leftIcon: <></>,
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  errorContainer: {
    fontSize: 9,
    textAlign: "left",
    color: palette.error.light,
  },
  rightBtnVisibility: {
    position: "absolute",
    right: 9,
    height: 25,
    width: 25,
    padding: 0,
    marginTop: 21,
  },
  leftBtnVisibility: {
    position: "absolute",
    left: 9,
    height: 25,
    width: 25,
    padding: 0,
    marginTop: 21,
  },
});

export default TextInput;
