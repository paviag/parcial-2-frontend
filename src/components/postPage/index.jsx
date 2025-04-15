import React, { useState } from 'react'
import '../../css/App.css'
import PostItem from '../postItem'
import { useParams } from 'react-router-dom'
import MainPostItem from '../mainPostItem'
import CreatePostSection from '../createPostSection'

function PostPage() {
  const { id } = useParams();
  const [text, setText] = useState('');

  const handleSubmit = () => {
    // TODO create comment
  }

  return (
    <div className='posts-list'>
      <MainPostItem key='main-tweet' />
      <CreatePostSection 
        actionName={'Leave a comment'}
        handleSubmit={handleSubmit}
      />
      <h2>Comments</h2>
      {Array.from(Array(15).keys()).map((n) => {
        return <PostItem key={n} />
      })}
    </div>
  )
}

export default PostPage;