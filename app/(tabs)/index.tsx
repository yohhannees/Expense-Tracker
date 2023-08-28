import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import ExpenseTrackerComponent from '../../components/ExpenseTrackerComponent';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <ExpenseTrackerComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 5,
    marginHorizontal: 20,
    marginVertical: 40,
    borderRadius: 8,
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
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