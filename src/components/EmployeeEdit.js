import React, { Component } from 'react';
import { Card, CardSection, Button, Confirm } from './common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeEdit, employeeDelete, employeeClear } from '../actions';
import EmployeeForm from './EmployeeForm';
import _ from 'lodash';
import { text } from 'react-native-communications';

class EmployeeEdit extends Component {

  state = {
      showModal: false,
  }

  componentWillMount = () => {
    _.each(this.props.employee, (value, prop) => {
        this.props.employeeUpdate( { prop, value} );
    });
  }
  
  componentWillUnmount = () => {
    this.props.employeeClear();
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
                    onPress={() => this.setState({ showModal: !this.state.showModal0 })}
                >
                    Fire
                </Button>                
            </CardSection>
            <Confirm
                visible={this.state.showModal}
                onAccept={() => this.props.employeeDelete(this.props.employee)}
                onDecline={()=>this.setState({ showModal: false })}
            >
                Are you sure you want to fire employee?
            </Confirm>
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
  employeeEdit,
  employeeDelete,
  employeeClear
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeEdit);