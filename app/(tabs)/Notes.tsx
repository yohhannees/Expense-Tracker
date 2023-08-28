import { Platform, StyleSheet, View } from "react-native";
import { Text } from "react-native";
import React from "react";
import NoteComponent from "../../components/NoteComponent";

export default function ModalScreen() {
  const people = ["ruth"];

  return (
    <View style={styles.container}>
     <NoteComponent></NoteComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin:5,
    padding:5,
    marginHorizontal: 20,
    marginVertical: 40,
    marginBottom:80,
 
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
