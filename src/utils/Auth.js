import jwtDecode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

const setToken = async (token) => {
  await AsyncStorage.setItem("accessToken", token);
};

const getToken = async () => {
  return await AsyncStorage.getItem("accessToken");
};

const getDecodedJwt = async () => {
  try {
    const token = await getToken();
    const decoded = jwtDecode(token);
    return decoded;
  } catch (err) {
    return {};
  }
};

const setRefreshToken = async (refreshToken) => {
  await AsyncStorage.setItem("refreshToken", refreshToken);
};

const getRefreshToken = async () => {
  return await AsyncStorage.getItem("refreshToken");
};

const removeToken = async () => {
  await AsyncStorage.removeItem("refreshToken");
  await AsyncStorage.removeItem("token");
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
