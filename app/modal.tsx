
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const friends = ["JJ", "Jossy", "Ruth", "Yoda", "Yid"];

export default function ModalScreen() {
  const [currentTurnIndex, setCurrentTurnIndex] = useState(0);

  const handleNextTurn = () => {
    const nextIndex = (currentTurnIndex + 1) % friends.length;
    setCurrentTurnIndex(nextIndex);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Payment Turn</Text>
      <Text style={styles.turnText}>
        It's {friends[currentTurnIndex]}'s turn to pay!
      </Text>
      <Button title="Next Turn" onPress={handleNextTurn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  turnText: {
    fontSize: 18,
    marginVertical: 20,
  },
});
