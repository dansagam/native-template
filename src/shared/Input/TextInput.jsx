import React from "react";
import PropTypes from "prop-types";
import { View, TextInput as NativeTextInput, StyleSheet } from "react-native";
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
  style,
  ...props
}) => {
  const [focused, setFocused] = React.useState(false);
  return (
    <View
      style={{
        borderWidth: focused ? 2 : 1,
        borderColor: focused ? palette.primary.main : palette.grey[200],
        borderRadius: 4,
        width: "100%",
        height: multiline ? 100 : 50,
        backgroundColor: "transparent",
        marginVertical: 10,
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
        placeholderTextColor={palette.secondary.main}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          zIndex: 3000,
          ...style,
        }}
        {...props}
      />
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
});

export default TextInput;
