import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const normalize = (size) => {
  return RFValue(size, 844);
};

// const FONT_PRIMARY = `"Ub","Open Sans", "sans-serif"`;

const typography = StyleSheet.create({
  h1: {
    fontFamily: "Ubuntu-Bold",
    fontSize: 28,
    lineHeight: normalize(28) * 1.5,
  },
  h2: {
    fontFamily: "Ubuntu-Bold",
    fontSize: 24,
    lineHeight: normalize(24) * 1.5,
  },
  h3: {
    fontFamily: "Ubuntu-Medium",
    fontSize: 20,
    lineHeight: normalize(20) * 1.5,
  },
  h4: {
    fontFamily: "Ubuntu-Medium",
    fontSize: 18,
    lineHeight: normalize(18) * 1.5,
  },
  h5: {
    fontFamily: "Ubuntu-Medium",
    fontSize: 16,
    lineHeight: normalize(16) * 1.5,
  },
  subtitle1: {
    fontFamily: "Ubuntu-Medium",
    fontSize: 16,
    lineHeight: normalize(16) * 1.5,
  },
  subtitle2: {
    fontFamily: "Ubuntu-Medium",
    fontSize: 14,
    lineHeight: normalize(14) * 1.5,
  },
  caption: {
    fontFamily: "Ubuntu-Light",
    fontSize: 14,
    lineHeight: normalize(14) * 1.5,
  },
  body1: {
    fontFamily: "Ubuntu-Regular",
    fontSize: 14,
    lineHeight: normalize(14) * 1.5,
  },
  body2: {
    fontFamily: "Ubuntu-Regular",
    fontSize: 12,
    lineHeight: normalize(12) * 1.5,
  },
});

export default typography;
