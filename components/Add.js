
import React, { useState } from 'react';
import { ScrollView, View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import DebtRegisterItem from './DebtRegisterItem';
import ReportScreen from './ReportScreen';

const people = ['JJ', 'Ruth', 'Yid', 'Yoda', 'Jossy'];


const Add = () => {
  const [debts, setDebts] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [reportVisible, setReportVisible] = useState(false);

  const handleDebtSubmit = (from, to, amount) => {
    if (amount > 0) {
      setDebts([...debts, { from, to, amount }]);
    }
  };

  const generateReport = () => {
    setReportVisible(true);
  };

  const clearData = () => {
    setDebts([]);
    setReportVisible(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {people.map(person => (
        <View key={person}>
          <TouchableOpacity
            style={styles.personButton}
            onPress={() => setSelectedPerson(selectedPerson === person ? null : person)}
          >
            <Text style={styles.personName}>{person}</Text>
          </TouchableOpacity>
          {selectedPerson === person && !reportVisible && (
            <View style={styles.debtRegisterSection}>
              {people.map(to =>
                person !== to && (
                  <DebtRegisterItem
                    key={`${person}-${to}`}
                    from={person}
                    to={to}
                    onSubmit={handleDebtSubmit}
                  />
                )
              )}
            </View>
          )}
        </View>
      ))}
      <View style={styles.buttonsContainer}>
        <Button title="Generate Report" onPress={generateReport} />
        <Button title="Clear Data" onPress={clearData} />
      </View>
     {reportVisible && (
      <ReportScreen debts={debts} onBack={() => setReportVisible(false)} />
    )}
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 20,
  },
  personButton: {
    marginBottom: 8,
    borderBottomWidth: 1,
    paddingBottom: 8,
  },
  personName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  debtRegisterSection: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f7f7f7',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
});

export default Add;
