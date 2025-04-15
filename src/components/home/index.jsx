import React from 'react'
import '../../css/App.css'
import PostItem from '../postItem';

function Home() {
  // TODO fetch posts with api
  return (
    <div className='posts-list'>
      <h1>Following</h1>
      {Array.from(Array(15).keys()).map((n) => {
        return <PostItem key={n} />
      })}
    </div>
  )
}

export default Home;
