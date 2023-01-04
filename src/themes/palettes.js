function createGradient(color1, color2) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// SETUP COLORS
const GREY = {
  50: "#F3F3F3",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
  // A100: alpha("#919EAB", 0.08),
  // A200: alpha("#919EAB", 0.16),
  // A400: alpha("#919EAB", 0.32),
  // A700: alpha("#919EAB", 0.56),
};

const PRIMARY = {
  lighter: "#fcaf98",
  light: "#fc7850",
  main: "#f15c2f",
  dark: "#ba4320",
  darker: "#E42D1B",
  input: "#fff",
  lighterAlt: "#fff",
  tertiary: "#fff",
  contrastText: "#fff",
};

const SECONDARY = {
  lighter: "#f4f4f4",
  light: "#e4e4e4",
  main: "#dedede",
  darker: "#1f1f1f",
  dark: "#404040",
  contrastText: "#413A3A",
};

const SUCCESS = {
  lighter: "#a5e8a8",
  light: "#81c784",
  main: "#4caf50",
  darker: "#17631b",
  dark: "#388e3c",
  contrastText: "rgba(0, 0, 0, 0.87)",
};

const INFO = {
  lighter: "#92caf7",
  light: "#64b5f6",
  main: "#2196f3",
  darker: "#093f6b",
  dark: "#1c4369",
  contrastText: "#fff",
};

const WARNING = {
  lighter: "#ffc46e",
  light: "#ffb74d",
  main: "#ff9800",
  darker: "#915906",
  dark: "#f57c00",
  contrastText: "rgba(0, 0, 0, 0.87)",
};

const ERROR = {
  lighter: "#f56962",
  light: "#E75048",
  main: "#e2251b",
  dark: "#9E1912",
  darker: "#8a0c06",
  contrastText: "#fff",
};

const BORDER = {
  tableBorder: "#E3E3E3",
};

const GRADIENT = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
};

const COMMON = {
  common: { black: "#000", white: "#fff" },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  gradient: GRADIENT,
  border: BORDER,
};

const palette = {
  ...COMMON,
  text: {
    primary: "#413A3A;",
    secondary: "#605959",
    disabled: "rgba(0, 0, 0, 0.38)",
  },
  background: {
    paper: "#fcfcfc",
    default: "#ffffff",
    box: "#f7f7f7",
  },
};

export default palette;
