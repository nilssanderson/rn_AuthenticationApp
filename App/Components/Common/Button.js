import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './Styles/ButtonStyles';

const Button = ({ children, onPress }) => {
  const { buttonStyle, textStyle } = styles;
  
  return (
    <TouchableOpacity
      onPress={onPress}
      style={buttonStyle}
    >
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export { Button };
