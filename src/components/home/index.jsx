import React, { useEffect, useState } from 'react'
import '../../css/App.css'
import PostItem from '../postItem';
import { getTimelinePosts } from '../../utils/apiService';

function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getTimelinePosts()
      setPosts(data)
    }
    fetchPosts()
  }, [])

  return (
    <div className='posts-list'>
      <h1>Following</h1>
      {posts.map((postData) => {
        return <PostItem key={postData._id} tweetData={postData} />
      })}
    </div>
  )
}

export default Home;
