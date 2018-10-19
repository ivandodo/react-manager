import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from '@firebase/app';
import '@firebase/auth';
import config from '../firebase';
import LoginForm from './components/LoginForm';

export class App extends Component {

  componentWillMount = () => {
    firebase.initializeApp(config);
  }
  

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    )
  }
}

export default App;
