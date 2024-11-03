import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const RegisterButton = ({ onPress }: any) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Create New Account</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    alignSelf: 'stretch', // gives the button full available width
    borderRadius: 100, // round pill-style button
    alignItems: 'center',
    marginVertical: 4,
    borderWidth: 2,
    borderColor: '#1FADFF',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default RegisterButton;
