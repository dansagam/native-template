import jwtDecode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

const setToken = (token) => {
  AsyncStorage.setItem("accessToken", token);
};

const getToken = () => {
  return AsyncStorage.getItem("accessToken");
};

const getDecodedJwt = () => {
  try {
    const token = getToken();
    const decoded = jwtDecode(token);
    return decoded;
  } catch (err) {
    return {};
  }
};

const setRefreshToken = (refreshToken) => {
  AsyncStorage.setItem("refreshToken", refreshToken);
};

const getRefreshToken = () => {
  return AsyncStorage.getItem("refreshToken");
};

const removeToken = () => {
  AsyncStorage.removeItem("refreshToken");
  AsyncStorage.removeItem("token");
};

const logOut = (navigate) => {
  removeToken();
  if (navigate) {
    navigate("SignIn");
  }
};

const isAuthenticated = () => {
  try {
    const decodedToken = getDecodedJwt();
    if (decodedToken) {
      const { exp } = decodedToken;
      const currentTime = Date.now() / 1000;
      if (exp) {
        return exp > currentTime;
      }
      return true;
    }
    return false;
  } catch (e) {
    return false;
  }
};

const Auth = {
  setToken,
  getToken,
  getDecodedJwt,
  setRefreshToken,
  getRefreshToken,
  removeToken,
  logOut,
  isAuthenticated,
};

export default Auth;
