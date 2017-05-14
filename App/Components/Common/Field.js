import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './Styles/FieldStyles';


const Field = ({ label, placeholder, value, onChangeText, secureTextEntry }) => {
  const { containerStyles, labelStyles, fieldStyles } = styles;

  return (
    <View style={containerStyles}>
      <Text style={labelStyles}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry} /* use asterix type secure entry */
        placeholder={placeholder}
        autoCorrect={false} /* show autocorrect? */
        style={fieldStyles}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};


export { Field };
