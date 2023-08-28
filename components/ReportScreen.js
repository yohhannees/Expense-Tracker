import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const ReportScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Expense Summary</Text>
        <Text style={styles.debtText}>
          <Feather name="dollar-sign" size={18} color="green" style={styles.icon} />
          Yid Paid $200 For Ruth
        </Text>
         <Text style={styles.debtText}>
          <Feather name="dollar-sign" size={18} color="green" style={styles.icon} />
          JJ Paid $200 For Yid
        </Text>
         <Text style={styles.debtText}>
          <Feather name="dollar-sign" size={18} color="green" style={styles.icon} />
          Jossy Paid $200 For Ruth
        </Text>
         <Text style={styles.debtText}>
          <Feather name="dollar-sign" size={18} color="green" style={styles.icon} />
          JJ Paid $200 For Yoda
        </Text>
         <Text style={styles.debtText}>
          <Feather name="dollar-sign" size={18} color="green" style={styles.icon} />
          Yoda Paid $200 For Ruth
        </Text>
         <Text style={styles.debtText}>
          <Feather name="dollar-sign" size={18} color="green" style={styles.icon} />
          Yid Paid $200 For Ruth
        </Text>
         <Text style={styles.debtText}>
          <Feather name="dollar-sign" size={18} color="green" style={styles.icon} />
          Jossy Paid $200 For Ruth
        </Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.section}>
        <Text style={styles.title}>Calculated Debts</Text>
        <Text style={styles.debtText}>
          <Feather name="arrow-up-right" size={18} color="red" style={styles.icon} />
          Jossy owes Yid $200
        </Text>
        <Text style={styles.debtText}>
          <Feather name="arrow-up-right" size={18} color="red" style={styles.icon} />
          Jossy owes Yoda $200
        </Text>
        <Text style={styles.debtText}>
          <Feather name="arrow-up-right" size={18} color="red" style={styles.icon} />
          Yoda owes JJ $200
        </Text>
        <Text style={styles.debtText}>
          <Feather name="arrow-up-right" size={18} color="red" style={styles.icon} />
          Ruth owes Yoda $200
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f0f0f0',
    flex: 1,
    marginBottom: 10,
    marginTop: 10,
  },
  section: {
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  debtText: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 16,
    marginBottom: 8,
    color: '#555',
  },
  icon: {
    marginRight: 8,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 16,
  },
  actionButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  actionButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ReportScreen;
