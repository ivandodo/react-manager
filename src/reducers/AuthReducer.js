import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    RESET_FORM,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from '../actions/types';


const initialState = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
}

export default AuthReducer = (state = initialState, action) => {
  switch (action.type) {

    case EMAIL_CHANGED:
      return { ...state, email: action.payload };

    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };

    case LOGIN_USER_SUCCESS:
      return { ...state, ...initialState, user: action.payload, };

    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication failed.', loading: false }
    
    case LOGIN_USER:
      return {  ...state, loading: true, error: '' }

    case RESET_FORM:
      return {
          ...state,
          email: '',
          password: ''
      };

    default:
      return state;
  }
}
