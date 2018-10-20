import React, { Component } from 'react';
import { ListView, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions/EmployeeActions';
import _ from 'lodash';
import ListItem from './ListItem';


class EmployeeList extends Component {

  componentWillMount = () => {
    this.props.employeesFetch();
  
    this.createDataSource(this.props);
  };

  componentWillReceiveProps = (nextProps) => {
    this.createDataSource(nextProps);
  };
  
  createDataSource({ employees }){
    const ds =  new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  };

  renderRow(employee){
    return <ListItem employee={employee}/>;
    //return <Text>1</Text>;
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  employees : _.map(state.employees, (val, uid) => ({...val, uid}))
});

const mapDispatchToProps = {
  employeesFetch
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);