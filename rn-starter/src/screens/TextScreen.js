import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      {password.length < 5 && (
        <Text>Your password needs at least 5 characters!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "black",
    margin: 15,
    borderWidth: 1,
    padding: 5,
  },
});

export default TextScreen;
