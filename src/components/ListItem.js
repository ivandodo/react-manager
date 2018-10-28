import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { CardSection } from './common';
import { Actions } from 'react-native-router-flux';

export default class ListItem extends Component {

  onRowPress(){
      Actions.employeeEdit({ employee: this.props.employee });
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.textStyle}> {this.props.employee.name} </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    )
  };
};

const styles = {
  textStyle: {
      fontSize: 18,
      paddingLeft: 15
  }  
}