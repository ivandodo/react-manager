import React, { Component } from 'react';
import { Card, CardSection, Button } from './common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeEdit } from '../actions';
import EmployeeForm from './EmployeeForm';
import _ from 'lodash';
import { text } from 'react-native-communications';

class EmployeeEdit extends Component {

  componentWillMount = () => {
    _.each(this.props.employee, (value, prop) => {
        this.props.employeeUpdate( { prop, value} );
    });
  }
  

  render() {

    const { name, phone, shift, employeeEdit } = this.props;

    return (
        <Card>           
            <EmployeeForm { ...this.props }/> 

            <CardSection>
                <Button
                    onPress={() => employeeEdit({ name, phone, shift, uid: this.props.employee.uid })}
                >
                    Save Changes
                </Button>                
            </CardSection>

            <CardSection>
                <Button
                    onPress={() => text(
                        phone,
                        `Your upcoming shift is on ${shift}.`
                    )}
                >
                    Text
                </Button>                
            </CardSection>

            <CardSection>
                <Button
                    onPress={() => {}}
                >
                    Fire
                </Button>                
            </CardSection>
        </Card>
    )
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

const mapDispatchToProps = {
  employeeUpdate,
  employeeEdit
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeEdit);