import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={styles.searchBackground}>
      <SearchBar
        term={term}
        onChange={setTerm}
        onSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length}</Text>
      <ResultsList results={filterResultsByPrice("€")} title="Cost Effective" />
      <ResultsList results={filterResultsByPrice("€€")} title="Bit Pricier" />
      <ResultsList results={filterResultsByPrice("€€€")} title="Big Spender" />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBackground: {
    backgroundColor: "#FFFFFF",
  },
});
export default SearchScreen;
