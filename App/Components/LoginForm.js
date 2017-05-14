
import React, { Component } from 'react';
import { Button, Card, CardSection, Field } from './Common';


class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };

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

        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}


export default LoginForm;
