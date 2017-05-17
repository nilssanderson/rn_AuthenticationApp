import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase'; // should be above any of our own component imports
import { Button, Header, Spinner } from './Components/Common';
import LoginForm from './Components/LoginForm';

class App extends Component {

  // set loggedIn to null (we are not sure what state loggedIn is)
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDecynJCEIY1RDcReALM50LSY1UzzOgyW8',
      authDomain: 'authentication-1656d.firebaseapp.com',
      databaseURL: 'https://authentication-1656d.firebaseio.com',
      projectId: 'authentication-1656d',
      storageBucket: 'authentication-1656d.appspot.com',
      messagingSenderId: '910077964218'
    });

    // if user is signed in user will be populated
    // else user will be null
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size={'large'} />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText={'Authentication'} />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
