import React, { Component } from 'react';
import { Button, Card, CardSection, InputField } from './common'

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  } 
  render() {
    return (
      <Card>
        <CardSection>
          <InputField 
            label='Email'
            value={this.state.email}
            onChangeText={input => this.setState({ email: input })}
            placeholder= 'Email'
          />
        </CardSection>
        <CardSection>
        </CardSection>
        <CardSection>
          <Button>
            Log in
          </Button>
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm