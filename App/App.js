import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase'; // should be above any of our own component imports
import { Header } from './Components/Common';
import LoginForm from './Components/LoginForm';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDecynJCEIY1RDcReALM50LSY1UzzOgyW8',
      authDomain: 'authentication-1656d.firebaseapp.com',
      databaseURL: 'https://authentication-1656d.firebaseio.com',
      projectId: 'authentication-1656d',
      storageBucket: 'authentication-1656d.appspot.com',
      messagingSenderId: '910077964218'
    });
  }

  render() {
    return (
      <View>
        <Header headerText={'Authentication'} />
        <LoginForm />
      </View>
    );
  }
}

export default App;
