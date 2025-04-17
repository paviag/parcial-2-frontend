import React from 'react'
import BaseForm from '../baseForm';
import { login } from '../../utils/apiService';

function Login() {
  const inputData = {
    'Username': 'text',
    'Password': 'password',
  }
  return (
    <BaseForm 
      inputData={inputData} 
      formTitle='Login' 
      actionName='Sign in' 
      onSubmit={login}
      redirectAddress={'/'}
    />
  )
}

export default Login;