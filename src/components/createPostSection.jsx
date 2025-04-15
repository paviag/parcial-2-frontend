import React, { useState } from 'react'

function CreatePostSection({ actionName='Share', handleSubmit }) {
  if (handleSubmit == undefined) {
    handleSubmit = () => {
      // TODO add default: creating new post from user
    }
  }
  const [text, setText] = useState('');

  const handleInput = (event) => {
    setText(event.target.value);
    event.target.style.height = 'auto'; 
    event.target.style.height = event.target.scrollHeight + 'px';
  };

  return (
    <section id='side-create-post-section' className='elevated-container create-post-section'>
      <div className='pfp-user-container'>
        <div className='pfp-container' />
        <div className='v-flex'>
          <p>
            <b>You</b> <br></br>
            <span className='text-dim'>@carloscachlos</span> 
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
        <button onClick={() => handleSubmit(text)}>{actionName}</button>
      </form>

    </section>
  )
}

export default CreatePostSection;