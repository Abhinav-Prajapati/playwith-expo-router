import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface CustomButtonProps {
  type?: 'solid' | 'outline';
  title: string;
  onPress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ type = 'solid', title, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, type === 'outline' ? styles.outlineButton : styles.solidButton]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, type === 'outline' ? styles.outlineText : styles.solidText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    alignSelf: 'stretch',
    borderRadius: 100,
    alignItems: 'center',
    marginVertical: 4,
  },
  solidButton: {
    backgroundColor: '#1FADFF',
  },
  outlineButton: {
    borderWidth: 2,
    borderColor: '#1FADFF',
  },
  buttonText: {
    fontSize: 16,
  },
  solidText: {
    color: '#fff',
  },
  outlineText: {
    color: '#fff',
  },
});

export default CustomButton;
