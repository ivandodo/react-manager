import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE } from './types';
import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';
import { Actions } from 'react-native-router-flux';

export const employeeUpdate = ({ prop, value}) => {
    return ({
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    })
}

export const employeeCreate = ({ name, phone, shift}) => {
    const { currentUser } = firebase.auth();
    console.log({ name, phone, shift });
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, shift})
            .then(() => {
                dispatch({ type: EMPLOYEE_CREATE });
                Actions.employeeList();
            });
    }
}