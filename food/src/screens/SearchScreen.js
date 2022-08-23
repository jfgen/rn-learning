import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
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
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("€")}
          title="Cost Effective"
        />
        <ResultsList results={filterResultsByPrice("€€")} title="Bit Pricier" />
        <ResultsList
          results={filterResultsByPrice("€€€")}
          title="Big Spender"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBackground: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
});
export default SearchScreen;
