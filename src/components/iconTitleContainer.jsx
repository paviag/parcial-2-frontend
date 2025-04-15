import React from 'react'
import { TbMessageChatbotFilled } from 'react-icons/tb'
import '../css/App.css'

function IconTitleContainer() {
  return (
    <div className='icon-title-container'>
      <div className='icon-container circle center-content'>
        <TbMessageChatbotFilled size={30} />
      </div>
      <h1>Twitter</h1>
    </div>
  )
}

export default IconTitleContainer;