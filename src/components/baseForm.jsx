import React, { useState } from 'react'
import '../css/App.css'
import IconTitleContainer from './iconTitleContainer'
import { useNavigate } from 'react-router-dom'

function BaseInput({ name, identifier, type, onChange }) {
  return (
    <label className='v-flex'>
      <span className='text-tiny text-dim'>{name}</span>
      <input id={identifier} name={identifier} type={type} placeholder={name} onChange={onChange} />
    </label>
  )
}

function stringToCamelCase(str) {
  const words = str.split(' ')
  return [words[0].toLowerCase(), ...words.slice(1)].join('')
}

function BaseForm({ inputData, formTitle, actionName, onSubmit, redirectAddress }) {
  const nav = useNavigate()
  const [data, setData] = useState(
    Object.keys(inputData).reduce((acc, name) => {
      acc[stringToCamelCase(name)] = ''
      return acc
    }, {})
  )

  const handleChange = (event, identifier) => {
    setData({ ...data, [identifier]: event.target.value })
  };

  const handleSubmit = async(event) => {
    event.preventDefault()
    await onSubmit(data)
    nav(redirectAddress)
  }
  
  return (
    <>
      <div className='logo-top-bar'>
        <IconTitleContainer />
      </div>
      <form id={`${formTitle.toLowerCase()}-form`} className='base-form'>
        <h1>{formTitle}</h1>
        {Object.keys(inputData).map(name => {
          const identifier = stringToCamelCase(name)
          return <BaseInput 
            key={identifier}
            name={name} 
            identifier={identifier}
            type={inputData[name]}
            onChange={(e) => handleChange(e, identifier)} 
            value={data[identifier]}
            />
        })}
        <button onClick={handleSubmit}>{actionName}</button>
        <p id='message'></p>
      </form>
    </>
  )
}

export default BaseForm;