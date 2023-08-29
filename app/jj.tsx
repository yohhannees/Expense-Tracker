import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
// import { Text } from "../components/Themed";

export default function ModalScreen() {
  const dummyPerson = {
    name: "JJ",
    phone: "123-456-7890",
    email: "JJ@example.com",
    bankAccount: "9876543210",
    profilePhoto: require("../assets/images/cover.jpg"), // Add the actual path to the profile photo
  };

  return (
    <View style={styles.container}>
      <Image source={dummyPerson.profilePhoto} style={styles.profilePhoto} />
      <Text style={styles.title}>{dummyPerson.name}</Text>
      <Text style={styles.info}>Phone: {dummyPerson.phone}</Text>
      <Text style={styles.info}>Email: {dummyPerson.email}</Text>
      <Text style={styles.info}>Bank Account: {dummyPerson.bankAccount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  info: {
    fontSize: 16,
    marginTop: 5,
  },
  profilePhoto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
});
