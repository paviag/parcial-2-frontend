import React from 'react'
import BaseForm from '../baseForm';

function Login() {
  // TODO add action onsubmit that takes the form data (it is properly formatted)
  const inputData = {
    'Username': 'text',
    'Password': 'password',
  }
  return (
    <BaseForm 
      inputData={inputData} 
      formTitle='Login' 
      actionName='Sign in' 
      onSubmit={() => {}}
    />
  )
}

export default Login;