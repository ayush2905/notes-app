import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import UpdateItem from "./components/UpdateItem";
import UpdateInput from "./components/UpdateInput";

export default function App() {
  const [updates, setUpdate] = useState([]);
  const [isAddMode,setIsAddMode] = useState(false);
  const addUpdateHandler = (enteredUpdate) => {
    setUpdate((currentUpdates) => [
      ...currentUpdates,
      { id: Math.random().toString(), value: enteredUpdate },
    ]);
    setIsAddMode(false);
  };

  const removeUpdateHandler = (id) => {
    setUpdate((currentUpdates) => {
      return currentUpdates.filter((update) => update.id !== id);
    });
  };

  const cancelHandler = () => {
    setIsAddMode(false)
  };

  return (
    <View style={styles.screen}>
      <Button title="Add Update" onPress={() => setIsAddMode(true)} />
      <UpdateInput visible={isAddMode} onAddUpdate={addUpdateHandler} onCancel={cancelHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={updates}
        renderItem={(itemData) => (
          <UpdateItem
            id={itemData.item.id}
            onDelete={removeUpdateHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
