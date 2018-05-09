import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, InputField, Spinner } from './common'

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  } 
  onButtonPress = () => {
    const { email, password } = this.state
    this.setState({ error: '', loading: true });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess)
          .catch(this.onLoginFail)
      })
  }
  renderButton = () => {
    if(this.state.loading) {
      return <Spinner size='small' />
    }
    return (
      <Button onPress={this.onButtonPress}>
        Log in
      </Button>
    )
  }

  onLoginSuccess = () => {
    this.setState({ 
      email: '',
      password: '',
      loading: false,
      error: ''
    })
  }
  onLoginFail = () => {
    this.setState({ error: 'Authenthication failed', loading: false})
  }
  render() {
    return (
      <Card>
        <CardSection>
          <InputField 
            label='Email'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            placeholder= 'dolois@gmail.com'
          />
        </CardSection>
        <CardSection>
        <InputField
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            placeholder="password"
            secureTextEntry
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm