import react from "react";
import { FlatList, StyleSheet, Text } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 12 },
    { name: "Friend #2", age: 23 },
    { name: "Friend #3", age: 34 },
    { name: "Friend #4", age: 33 },
    { name: "Friend #5", age: 54 },
    { name: "Friend #6", age: 32 },
    { name: "Friend #7", age: 65 },
    { name: "Friend #8", age: 46 },
    { name: "Friend #9", age: 21 },
  ];

  return (
    <FlatList
      data={friends}
      keyExtractor={(friend) => friend.name}
      renderItem={({ item }) => (
        <Text style={styles.textStyle}>
          {item.name} - Age {item.age}
        </Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
