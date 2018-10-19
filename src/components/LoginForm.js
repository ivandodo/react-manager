import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, resetForm } from '../actions';
import { Card, CardSection, Input, Button } from './common';

export class LoginForm extends Component {

  render() {

    const { email, password, emailChanged, passwordChanged } = this.props;

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

          <CardSection>
              <Button>
                  Log in
              </Button>
          </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = (state) => ({
  email: state.auth.email,
  password: state.auth.password
})

const mapDispatchToProps = {
  emailChanged,
  passwordChanged,
  resetForm
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
