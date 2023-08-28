import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Animated } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const NoteComponent = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState('');
  const deletionAnim = useRef(new Animated.Value(1)).current; // Animation value

  const addNote = () => {
    if (currentNote.trim() === '') {
      return;
    }

    const newNote = {
      id: Date.now(),
      text: currentNote,
    };

    setNotes([...notes, newNote]);
    setCurrentNote('');
  };

  const deleteNote = (id) => {
    // Animate the deletion
    Animated.timing(deletionAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      const updatedNotes = notes.filter((note) => note.id !== id);
      setNotes(updatedNotes);
      // Reset the animated value for next use
      deletionAnim.setValue(1);
    });
  };

  const renderItem = ({ item }) => (
    <Animated.View style={[styles.noteContainer, { opacity: deletionAnim }]}>
      <Text style={styles.noteText}>{item.text}</Text>
      <View style={styles.iconsContainer}>
        <MaterialIcons
          name="delete"
          size={24}
          color="red"
          onPress={() => deleteNote(item.id)}
        />
      </View>
    </Animated.View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Write a note..."
        multiline
        value={currentNote}
        onChangeText={setCurrentNote}
      />
      <Button title="Add Note" onPress={addNote} />
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    marginBottom: 40,
    paddingBottom: 80,
  },
  input: {
    marginBottom: 10,
    padding: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
  },
  noteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
  },
  noteText: {
    flex: 1,
  },
  iconsContainer: {
    flexDirection: 'row',
    marginLeft: 10,
  },
});

export default NoteComponent;
