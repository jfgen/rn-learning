import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.boxOneStyle}></View>
      <View style={styles.boxTwoStyle}></View>
      <View style={styles.boxThreeStyle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    height: 140,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  boxOneStyle: {
    height: 70,
    width: 70,
    borderWidth: 1,
    borderColor: "red",
  },
  boxTwoStyle: {
    height: 70,
    width: 70,
    borderWidth: 1,
    borderColor: "darkgreen",
    backgroundColor: "green",
    // alignSelf: "flex-end",
    // position: "absolute",
    // bottom: 0,
    // left: "50%",
    marginTop: 70,
    // hardcoded css object with position absolute and 0 at all coordinates
    // ...StyleSheet.absoluteFillObject,
  },
  boxThreeStyle: {
    height: 70,
    width: 70,
    borderWidth: 1,
    borderColor: "red",
  },
});

export default BoxScreen;
