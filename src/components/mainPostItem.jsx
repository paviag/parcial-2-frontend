import React, { useState } from 'react'
import { FaRegComment, FaRegHeart, FaHeart } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { formatCounts, formatDate } from '../utils/aux'

function MainPostItem({ tweetData }) {
  const { _id, content, user, createdAt } = tweetData
  const commentCount = tweetData.comments.length

  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(tweetData.likes)

  const nav = useNavigate() // todo navigate to user profile

  const handleLike = async() => {
    const res = await toggleLike({tweetId: _id})
    if (res.likes) {
      setLiked(!liked)
      setLikes(res.likes)
    } // else error
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onClick();
    }
  }
  
  return (
    <article className='post-container v-flex main-post'>
      <div className='pfp-user-container'>
        <div className='pfp-container' />
        <p className='v-flex'>
          <b>{user.name}</b> <span className='text-dim'>@{user.username} · {formatDate(createdAt)}</span> 
        </p>
      </div>
      
      <p>
        {content}
      </p>
      <div className='post-icons'>
        <div className='h-flex'
          onClick={handleLike}
          role='button'
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          {liked ? (
            <FaHeart size={24} fill='var(--accent)' opacity={0.8} />
          ) : (
            <FaRegHeart size={24} fill='var(--accent)' opacity={0.8} />
          )}
          <p>{formatCounts(likes)}</p>
        </div>
        <div className='h-flex'>
          <FaRegComment size={25} fill='var(--accent)' opacity={0.8} />
          <p>{formatCounts(commentCount)}</p>
        </div>
      </div>
    </article>
  );
}

export default MainPostItem;