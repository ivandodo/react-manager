import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  RESET_FORM,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from './types';
import firebase from '@firebase/app';
import '@firebase/auth';

export const emailChanged = (text) => ({
  type: EMAIL_CHANGED,
  payload: text
});

export const passwordChanged = (text) => ({
  type: PASSWORD_CHANGED,
  payload: text
});

export const resetForm = () => ({
  type: RESET_FORM,
  payload: undefined
});

export const logInUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER})

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSucess(dispatch, user))
      .catch( () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSucess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
        });
  };
};

const loginUserSucess = (dispatch, user) => {
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
}

const  loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL});
}
