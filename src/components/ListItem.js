import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

export default class ListItem extends Component {
  render() {
    return (
      <CardSection>
        <Text style={styles.textStyle}> {this.props.employee.name} </Text>
      </CardSection>
    )
  };
};

const styles = {
  textStyle: {
      fontSize: 18,
      paddingLeft: 15
  }  
}