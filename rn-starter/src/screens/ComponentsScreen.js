import react from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const name = "Jorge";

  return (
    <View>
      <Text style={styles.titleStyle}>Getting started with React Native!</Text>
      <Text style={styles.textStyle}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 45,
  },
  textStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
