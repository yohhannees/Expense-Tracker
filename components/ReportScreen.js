import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ReportScreen = ({ debts, onClose }) => {
  // Aggregate the debts and perform calculations
  const consolidatedDebts = debts.reduce((result, debt) => {
    const existingDebt = result.find(d => d.from === debt.from && d.to === debt.to);
    if (existingDebt) {
      existingDebt.amount += debt.amount;
    } else {
      result.push({ ...debt });
    }
    return result;
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Report</Text>
      {consolidatedDebts.map((debt, index) => (
        <Text key={index} style={styles.debtText}>
          {debt.from} Paid {debt.amount} For {debt.to}
        </Text>
      ))}
      <Button title="Close" onPress={onClose} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  debtText: {
    fontSize: 16,
    marginBottom: 8, 
  },
});

export default ReportScreen;
