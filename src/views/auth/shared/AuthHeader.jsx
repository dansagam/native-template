import React from "react";
import PropTypes from "prop-types";
import { Pressable, StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Text } from "shared";

const AuthHeader = ({ onPrevious }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPrevious} style={styles.icon}>
        <AntDesign name="left" size={20} color="black" />
      </Pressable>
      <Text style={styles.main} variant="h5" color="primary.main">
        Home Icon
      </Text>
    </View>
  );
};

AuthHeader.propTypes = {
  onPrevious: PropTypes.func,
};

AuthHeader.defaultProps = {
  onPrevious: () => {},
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  main: {
    flex: 1,
    textAlign: "center",
  },
  icon: {
    width: 30,
  },
});

export default AuthHeader;
