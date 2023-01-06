import React from "react";
import PropTypes from "prop-types";
import { ScrollView, StyleSheet } from "react-native";
import palette from "themes/palettes";

const ScrollContainer = ({ children }) => {
  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      contentInsetAdjustmentBehavior="automatic"
      style={styles.baseContainer}
    >
      {children}
    </ScrollView>
  );
};

ScrollContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1,
    backgroundColor: palette.background.default,
  },
  contentContainer: {
    padding: 10,
    backgroundColor: palette.background.default,
  },
});

export default ScrollContainer;
