
import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Field, Spinner } from './Common';
import styles from './Styles/LoginFormStyles';


class LoginForm extends Component {

  state = {
    loading: false,
    error: '',
    email: '',
    password: '',
  };

  onButtonPress() {
    // destructure the email and password from this.state
    const { email, password } = this.state;

    // reset state
    this.setState({
      loading: true,
      error: '',
    });

    // rudementary login using firebase; auth and signInWithEmailAndPassword
    // passing in email and password
    firebase.auth().signInWithEmailAndPassword(email, password)
      // if successful call onLoginSuccess and bind this (as its async)
      .then(this.onLoginSuccess.bind(this))
      // if there is an error signing in
      // create a user with the same credentials
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          // if successful call onLoginSuccess and bind this (as its async)
          .then(this.onLoginSuccess.bind(this))
          // if there is already a user with the credentials or
          // some other error such as wrong credentials
          // then throw an error
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginFail() {
    this.setState({
      loading: false,
      error: 'Authentication Failed!'
    });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: '',
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size={'small'} />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Field
            placeholder={'user@gmail.com'}
            label={'Email'}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Field
            secureTextEntry
            placeholder={'********'}
            label={'Password'}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyles}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}


export default LoginForm;
