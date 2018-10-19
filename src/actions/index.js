import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  RESET_FORM
} from './types';

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