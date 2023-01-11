import React from "react";
import PropTypes from "prop-types";
import { Pressable, StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Text } from "shared";

const AuthHeader = ({ onPrevious, backBtn }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPrevious} style={styles.icon}>
        {backBtn && <AntDesign name="left" size={20} color="black" />}
      </Pressable>
      <Text style={styles.main} variant="h5" color="primary.main">
        Home Icon
      </Text>
      <View style={styles.lastFlex} />
    </View>
  );
};

AuthHeader.propTypes = {
  onPrevious: PropTypes.func,
  backBtn: PropTypes.bool,
};

AuthHeader.defaultProps = {
  onPrevious: () => {},
  backBtn: true,
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
  lastFlex: {
    width: 30,
  },
});

export default AuthHeader;
