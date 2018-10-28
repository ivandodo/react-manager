import React, { Component } from 'react';
import { Card, CardSection, Button } from './common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  render() {

    const { name, phone, shift, employeeCreate } = this.props;

    return (
        <Card>           
            <EmployeeForm { ...this.props }/> 
            <CardSection>
                <Button
                    onPress={() => employeeCreate({ name, phone, shift })}
                >
                    Create
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
  employeeCreate
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeCreate);