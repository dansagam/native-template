import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, ActivityIndicator } from "react-native";
import { Text } from "shared";

export const paletteVariant = ["primary", "secondary", "success", "inherit"];

const Button = ({ label, children, loading, color }) => {
  return (
    <TouchableOpacity>
      {loading ? (
        <ActivityIndicator size="small" animating color={color} />
      ) : (
        children ?? <Text variant="h2"> {label} </Text>
      )}
    </TouchableOpacity>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
  loading: PropTypes.bool,
  color: PropTypes.oneOf([...paletteVariant]),
  onPress: PropTypes.func,
};

Button.defaultProps = {
  loading: false,
  color: "primary",
  children: null,
  onPress: () => {},
};

export default Button;
