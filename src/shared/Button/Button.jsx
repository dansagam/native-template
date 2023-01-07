import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, ActivityIndicator } from "react-native";
import { Text } from "shared";
import palette from "themes/palettes";
// import typography from "themes/typography";

export const paletteVariant = ["primary", "secondary", "success", "inherit"];

const btnSize = {
  medium: 30,
  large: 45,
  size: 24,
};

const Button = ({
  label,
  children,
  loading,
  color,
  variant,
  disabled,
  onPress,
  fullWidth,
  inverse,
  size,
}) => {
  const baseColor = palette[color || "primary"];

  const backColor = {
    backgroundColor:
      variant === "outlined"
        ? baseColor?.contrastText || palette.primary.contrastText
        : baseColor?.main || palette.primary.main,
    color:
      variant === "outlined"
        ? baseColor?.main || palette.primary.main
        : baseColor?.contrastText || palette.primary.contrastText,
  };

  const disableBgColor = {
    backgroungColor: palette.grey[300],
    color: palette.common.black,
  };
  return (
    <TouchableOpacity
      style={{
        ...backColor,
        ...(disabled && {
          ...disableBgColor,
        }),
        ...(inverse && {
          backgroundColor: backColor.color,
        }),
        height: btnSize[size || "medium"],
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        borderRadius: 8,
        width: fullWidth ? "100%" : "auto",
        borderWidth: variant === "outlined" ? 1 : 0,
        borderColor: baseColor?.main || palette.primary.main,
      }}
      disabled={disabled || loading}
      onPress={onPress}
      activeOpacity={0.5}
    >
      {loading ? (
        <ActivityIndicator size="small" animating color={color} />
      ) : (
        children ?? (
          <Text
            variant="h4"
            style={{ color: inverse ? backColor.backgroundColor : backColor.color }}
          >
            {" "}
            {label}{" "}
          </Text>
        )
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
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["large", "medium", "small"]),
  fullWidth: PropTypes.bool,
  inverse: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
  color: "primary",
  children: null,
  onPress: () => {},
  variant: "contained",
  disabled: false,
  size: "medium",
  fullWidth: true,
  inverse: false,
};

export default Button;
