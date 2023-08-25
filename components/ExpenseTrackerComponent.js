import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const people = ['JJ', 'Ruth', 'Yid', 'Yoda', 'Jossy'];

const ExpenseTrackerComponent = () => {
  const [debts, setDebts] = useState({});
  const [expandedPerson, setExpandedPerson] = useState(null);
  const [addStatus, setAddStatus] = useState({});

  const handleDebtSubmit = (from, to, amount) => {
    if (amount > 0) {
      setAddStatus(prevStatus => ({
        ...prevStatus,
        [from]: {
          ...prevStatus[from],
          [to]: true,
        },
      }));
      setTimeout(() => {
        setAddStatus(prevStatus => ({
          ...prevStatus,
          [from]: {
            ...prevStatus[from],
            [to]: false,
          },
        }));
      }, 1000);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {people.map(person => (
        <View key={person} style={styles.personContainer}>
          <Text
            style={styles.personName}
            onPress={() => setExpandedPerson(expandedPerson === person ? null : person)}
          >
            {person}
          </Text>
          {expandedPerson === person && (
            <View style={styles.debtRegisterSection}>
              {people.map(to =>
                person !== to && (
                  <View key={`${person}-${to}`} style={styles.debtRegisterItem}>
                    <Text>{`Amount to ${to}: `}</Text>
                    <TextInput
                      style={styles.amountInput}
                      placeholder="Enter amount"
                      keyboardType="numeric"
                      onChangeText={(amount) =>
                        setDebts(prevDebts => ({
                          ...prevDebts,
                          [from]: {
                            ...prevDebts[from],
                            [to]: amount,
                          },
                        }))
                      }
                    />
                    <TouchableOpacity
                      style={[
                        styles.addButton,
                        { backgroundColor: addStatus[person]?.[to] ? 'green' : '#007bff' },
                      ]}
                      onPress={() => handleDebtSubmit(person, to, debts[person]?.[to] || 0)}
                    >
                      <Text style={styles.addButtonText}>
                        {addStatus[person]?.[to] ? 'OK' : 'Add'}
                      </Text>
                    </TouchableOpacity>
                  </View>
                )
              )}
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 2,
  },
  personContainer: {
    marginBottom: 6,
  },
  personName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  debtRegisterSection: {
    backgroundColor: '#f7f7f7',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  debtRegisterItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  amountInput: {
    flex: 1,
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  addButton: {
    marginLeft: 10,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  addButtonText: {
    color: 'white',
  },
});

export default ExpenseTrackerComponent;
