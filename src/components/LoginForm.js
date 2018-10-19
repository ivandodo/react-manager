import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { 
    emailChanged, 
    passwordChanged, 
    resetForm, 
    logInUser 
} from '../actions';
import { Card, CardSection, Input, Button } from './common';

export class LoginForm extends Component {

  renderError(){
    if(this.props.error){
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  onButtonPress() {

    const {
      email,
      password,
      logInUser
    } = this.props;
    
    logInUser({email, password});
  }

  render() {

    const {
      email,
      password,
      emailChanged,
      passwordChanged,
    } = this.props;

    return (
      <Card>
          <CardSection>
            <Input 
                label='Email'
                placeholder='email@provider.com'
                onChangeText={emailChanged.bind(this)}
                value={email}
            />
          </CardSection>

          <CardSection>
            <Input 
                label='Password'
                placeholder='password'
                secureTextEntry
                onChangeText={passwordChanged.bind(this)}
                value={password}
            />
          </CardSection>
          {this.renderError()}

          <CardSection>
              <Button onPress={this.onButtonPress.bind(this)}>
                  Log in
              </Button>
          </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  }
}

const mapStateToProps = (state) => ({
  email: state.auth.email,
  password: state.auth.password,
  error: state.auth.error,
  user: state.auth.user
})

const mapDispatchToProps = {
  emailChanged,
  passwordChanged,
  resetForm,
  logInUser
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
