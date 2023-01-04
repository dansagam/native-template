import { StyleSheet } from "react-native";
import { pxToRem } from "utils/formatFont";

// const FONT_PRIMARY = `"Ub","Open Sans", "sans-serif"`;

const typography = StyleSheet.create({
  h1: {
    fontFamily: "Ubuntu-Bold",
    fontSize: pxToRem(18),
    lineHeight: 18 / 40,
  },
  h2: {
    fontFamily: "Ubuntu-Bold",
    fontSize: pxToRem(18),
    lineHeight: 18 / 40,
  },
  h3: {
    fontFamily: "Ubuntu-Medium",
    fontSize: pxToRem(18),
    lineHeight: 18 / 40,
  },
  h4: {
    fontFamily: "Ubuntu-Medium",
    fontSize: pxToRem(16),
    lineHeight: 16 / 38,
  },
  h5: {
    fontFamily: "Ubuntu-Medium",
    fontSize: pxToRem(16),
    lineHeight: 16 / 28,
  },
  subtitle1: {
    fontFamily: "Ubuntu-Medium",
    fontSize: pxToRem(16),
    lineHeight: 16 / 24,
  },
  subtitle2: {
    fontFamily: "Ubuntu-Medium",
    fontSize: pxToRem(18),
    lineHeight: 14 / 20,
  },
  caption: {
    fontFamily: "Ubuntu-Light",
    fontSize: pxToRem(14),
    lineHeight: 14 / 24,
  },
  body1: {
    fontFamily: "Ubuntu-Regular",
    fontSize: pxToRem(14),
    lineHeight: 14 / 24,
  },
  body2: {
    fontFamily: "Ubuntu-Regular",
    fontSize: pxToRem(12),
    lineHeight: 12 / 20,
  },
});

export default typography;
