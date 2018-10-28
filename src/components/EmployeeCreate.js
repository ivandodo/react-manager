import React, { Component } from 'react';
import { Card, CardSection, Button } from './common';
import { connect } from 'react-redux';
import { employeeCreate, employeeClear } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  
  componentWillUnmount = () => {
    this.props.employeeClear();
  }

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
  employeeCreate,
  employeeClear
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeCreate);