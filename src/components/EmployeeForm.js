import React, { Component } from 'react';
import { Text, View, Picker } from 'react-native';
import { CardSection, Input } from './common';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';

class EmployeeForm extends Component {
  render() {

    const { name, phone, shift, employeeUpdate } = this.props;

    return (
      <View>
      <CardSection>
                <Input 
                    label='Name' 
                    placeholder='name'
                    value={name}
                    onChangeText={ value => employeeUpdate({ prop: 'name', value })}
                />
            </CardSection>
            
            <CardSection>
                <Input 
                    label='phone' 
                    placeholder='555-555-5555'
                    value={phone}
                    onChangeText={ value => employeeUpdate({ prop: 'phone', value })}
                />
            </CardSection>
            
            <CardSection >
                <Text style={styles.pickerTextStyle}>
                    Shift
                </Text>
                <Picker
                    style={{ flex: 1 }}
                    selectedValue={shift}
                    onValueChange={ value => employeeUpdate({ prop: 'shift', value })}
                >
                    <Picker.Item label='Monday' value='Monday'/>
                    <Picker.Item label='Tuesday' value='Tuesday'/>
                    <Picker.Item label='Wednesday' value='Wednesday'/>
                    <Picker.Item label='Thursday' value='Thursday'/>
                    <Picker.Item label='Friday' value='Friday'/>
                    <Picker.Item label='Saturday' value='Saturday'/>
                    <Picker.Item label='Sunday' value='Sunday'/>
                </Picker>
            </CardSection>
      </View>
    )
  };
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20,
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
  
    return { name, phone, shift };
  };

const mapDispatchToProps = {
    employeeUpdate
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeForm);
