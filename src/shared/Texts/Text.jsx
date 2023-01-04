import React from "react";
import PropTypes from "prop-types";
import { TextPropTypes, Text as NativeText } from "react-native";
import typography from "themes/typography";
import { RFValue } from "react-native-responsive-fontsize";

const variantValue = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "body1",
  "body2",
  "caption",
  "subtitle1",
  "subtitle2",
];

export const normalize = (size) => {
  return RFValue(size, 844);
};

const Text = ({ children, variant, style, ...props }) => {
  return (
    <NativeText
      style={{
        ...typography[variant],
        ...style,
      }}
      allowFontScaling
      {...props}
    >
      {children}
    </NativeText>
  );
};

Text.propTypes = {
  ...TextPropTypes,
  variant: PropTypes.oneOf([...variantValue]).isRequired,
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func,
  color: PropTypes.oneOf(["primary", "secondary"]),
  style: PropTypes.oneOfType([PropTypes.object]),
};

Text.defaultProps = {
  onPress: () => null,
  variant: "body1",
  color: "primary",
  style: {},
};

export default Text;
