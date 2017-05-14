
// Import libraries
import React from 'react';
import { Text, View } from 'react-native';
import styles from './Styles/HeaderStyles';


// Create the component
const Header = (props) => (
  <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>
      { props.headerText }
    </Text>
  </View>
);


// Make the component available to other parts of the app
export { Header };
