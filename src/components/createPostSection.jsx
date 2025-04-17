import React, { useState } from 'react'
import { createPost, sendComment } from '../utils/apiService';

function CreatePostSection({ actionName='Share', tweetId }) {
  const handleSubmit = async() => {
    if (tweetId == undefined) {
      await createPost({content: text})
    } else {
      await sendComment({comment: text, tweetId: tweetId})
    }
  }
  
  const username = localStorage.getItem('username')
  const [text, setText] = useState('')

  const handleInput = (event) => {
    setText(event.target.value)
    event.target.style.height = 'auto'
    event.target.style.height = event.target.scrollHeight + 'px'
  }

  const handleClick = (event) => {
    event.preventDefault
    handleSubmit(text)
  }

  return (
    <section id='side-create-post-section' className='elevated-container create-post-section'>
      <div className='pfp-user-container'>
        <div className='pfp-container' />
        <div className='v-flex'>
          <p>
            <b>You</b> <br></br>
            <span className='text-dim'>@{username}</span> 
          </p>
        </div>
      </div>

      <form id='post-form'>
        <label className='hide'>New Post</label>
        <textarea 
          id='new-post' 
          name='new-post' 
          placeholder='Share your thoughts...'
          maxLength="100"
          onChange={handleInput}
        >
        </textarea>
        <button onClick={handleClick}>{actionName}</button>
        <p id='message' style={{display: "none", margin: 0}}></p>
      </form>

    </section>
  )
}

export default CreatePostSection;