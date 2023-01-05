import React from "react";
import PropTypes from "prop-types";
import { Text as NativeText } from "react-native";
import typography from "themes/typography";
import palette from "themes/palettes";

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

const Text = ({ children, variant, style, color, ...props }) => {
  const splitColor = color?.split(".");
  const textColor = palette[splitColor[0]][splitColor[1]];
  return (
    <NativeText
      style={{
        ...typography[variant || "body1"],
        color: textColor,
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
  variant: PropTypes.oneOf([...variantValue]).isRequired,
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func,
  color: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object]),
};

Text.defaultProps = {
  onPress: () => null,
  variant: "body1",
  color: "text.primary",
  style: {},
};

export default Text;
