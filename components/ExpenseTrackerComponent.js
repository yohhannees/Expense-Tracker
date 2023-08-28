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
                    <Text>{` to ${to}: `}</Text>
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
                        { backgroundColor: addStatus[person]?.[to] ? '#43b581' : '#007bff' },
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
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  personContainer: {
    marginBottom: 12,
  },
  personName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  debtRegisterSection: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
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
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 4,
    marginLeft: 10,
    borderColor: '#ccc',
  },
  addButton: {
    marginLeft: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ExpenseTrackerComponent;
