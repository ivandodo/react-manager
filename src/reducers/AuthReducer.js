import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    RESET_FORM
} from '../actions/types';


const initialState = {
    email: '',
    password: ''
}

export default AuthReducer = (state = initialState, action) => {
  switch (action.type) {

  case EMAIL_CHANGED:
    return { ...state, email: action.payload }

  case PASSWORD_CHANGED:
    return { ...state, password: action.payload }

  case RESET_FORM:
    return {
        ...state,
        email: '',
        password: ''
    }

  default:
    return state
  }
}
