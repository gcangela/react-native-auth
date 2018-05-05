import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common/';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      // apiKey: 'AIzaSyDLeVESP0IZ6LLC647Z3OIeFrQTKl0k8io',
      authDomain: 'auth-project-54b5a.firebaseapp.com',
      databaseURL: 'https://auth-project-54b5a.firebaseio.com',
      projectId: 'auth-project-54b5a',
      storageBucket: 'auth-project-54b5a.appspot.com',
      messagingSenderId: '777752124399'
    })
  }
  render() {
    return (
      <View>
        <Header headerText={'Dolois'}/>>
        <LoginForm />
      </View>
    )
  }
}

export default App;