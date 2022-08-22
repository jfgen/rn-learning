import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");

  return (
    <View style={styles.searchBackground}>
      <SearchBar
        term={term}
        onChange={(newTerm) => setTerm(newTerm)}
        onSubmit={() => console.log("submitted yeah!")}
      />
      <Text>{term}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBackground: {
    backgroundColor: "#FFFFFF",
  },
});
export default SearchScreen;
