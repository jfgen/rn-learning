import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);

  const id = navigation.getParam("id");

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={styles.searchBackground}>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        renderItem={({ item }) => {
          return <Image source={{ uri: item }} style={styles.photo} />;
        }}
        keyExtractor={(photo) => photo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  photo: {
    height: 120,
    width: 250,
  },
});
export default ResultsShowScreen;
