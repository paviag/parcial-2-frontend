import React from 'react'
import BaseForm from '../baseForm';

function SignUp() {
  // TODO add action onsubmit that takes the form data (it is properly formatted)
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
      onSubmit={() => {}}
    />
  )
}

export default SignUp;