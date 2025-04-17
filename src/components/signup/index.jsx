import React from 'react'
import BaseForm from '../baseForm';
import { signup } from '../../utils/apiService';

function SignUp() {
  const inputData = {
    'Name': 'text',
    'Username': 'text',
    'Email': 'email',
    'Password': 'password',
    'Password Confirmation': 'password',
  }
  return (
    <BaseForm 
      inputData={inputData} 
      formTitle='Register' 
      actionName='Sign up' 
      onSubmit={signup}
      redirectAddress={'/'}
    />
  )
}

export default SignUp;