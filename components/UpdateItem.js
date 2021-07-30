import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
const UpdateItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)} >
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
    </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#FFFF66",
    borderColor: "black",
    borderWidth: 1,
  },
});
export default UpdateItem;
