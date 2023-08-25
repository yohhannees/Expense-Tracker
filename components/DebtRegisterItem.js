import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const DebtRegisterItem = ({ from, to, onSubmit }) => {
  const [amount, setAmount] = useState('');
  const [added, setAdded] = useState(false);

  const handleSubmit = () => {
    if (amount.trim() !== '') {
      onSubmit(from, to, parseFloat(amount));
      setAmount('');
      setAdded(true); // Mark the entry as added
      setTimeout(() => {
        setAdded(false); // Reset added state after 1 second
      }, 1000);
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={`Enter amount from ${from} to ${to}`}
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        returnKeyType="done"
      />
      <TouchableOpacity style={styles.addButton} onPress={handleSubmit}>
        <Text style={added ? styles.addedButtonText : styles.addButtonText}>
          {added ? 'OK' : 'Add'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
  },
  addButton: {
    marginLeft: 10,
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: '#007bff',
    borderRadius: 8,
  },
  addButtonText: {
    color: 'white',
  },
});

export default DebtRegisterItem;
