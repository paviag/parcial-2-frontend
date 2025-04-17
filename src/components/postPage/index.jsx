import React, { useState, useEffect } from 'react'
import '../../css/App.css'
import PostItem from '../postItem'
import { useParams } from 'react-router-dom'
import MainPostItem from '../mainPostItem'
import CreatePostSection from '../createPostSection'
import { getTweetData, sendComment } from '../../utils/apiService'

function PostPage() {
  const { id } = useParams();
  const [tweetData, setTweetData] = useState(null)
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await getTweetData(id)      
      setTweetData(data)
    }
    fetchData()
  }, [])

  
  if (!tweetData) {
    return <div>Loading...</div>
  }

  return (
    <div className='posts-list'>
      <MainPostItem key='main-tweet' tweetData={tweetData} />
      <CreatePostSection 
        actionName={'Leave a comment'}
        tweetId={id}
      />
      <h2>Comments</h2>
      {tweetData.comments.map((c) => {
        return <PostItem key={c._id} tweetData={c} isComment={true} />
      })}
    </div>
  )
}

export default PostPage;