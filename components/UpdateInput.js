import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const UpdateInput = (props) => {
  const [enteredUpdate, setEnteredGoal] = useState("");
  const updateInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addUpdateHandler = () => {
    props.onAddUpdate(enteredUpdate);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder=" Enter your project update"
          style={styles.textInput}
          onChangeText={updateInputHandler}
          value={enteredUpdate}
        />
         <View style={styles.buttonsContainer}>
        <View style={styles.button}><Button title="Update" onPress={addUpdateHandler} /></View>
        <View style={styles.button}><Button title="CANCEL" color="red" onPress={props.onCancel} /></View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    height: 40,
    width: 200,
    borderColor: "black",
    borderWidth: 1,
    padding: 1,
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%'
  },
  button: {
    width: '40%'
  }
});

export default UpdateInput;
