
import React from 'react';
import { View } from 'react-native';
import styles from './Styles/CardSectionStyles';


const CardSection = (props) => (
  <View style={styles.containerStyle}>
    { props.children }
  </View>
);


export { CardSection };
