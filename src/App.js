import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common/';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedIn: null }
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDLeVESP0IZ6LLC647Z3OIeFrQTKl0k8io',
      authDomain: 'auth-project-54b5a.firebaseapp.com',
      databaseURL: 'https://auth-project-54b5a.firebaseio.com',
      projectId: 'auth-project-54b5a',
      storageBucket: 'auth-project-54b5a.appspot.com',
      messagingSenderId: '777752124399'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  renderContent = () => {
    switch (this.state.loggedIn) {
      case true:
       return (
        <Button onPress={() => firebase.auth().signOut()}> Log Out </Button>
      )
      case false:
        return <LoginForm />
      default:
        return <Spinner size='large' />
    } 
  }
  render() {
    return (
      <View>
        <Header headerText='Auth'/>
        {this.renderContent()}
      </View>
    )
  }
}

export default App;