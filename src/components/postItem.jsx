import React, { useState } from 'react'
import { FaRegComment, FaRegHeart, FaHeart } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { formatCounts, formatDate } from '../utils/aux'
import { toggleLike } from '../utils/apiService'

function PostItem({ allowNavigate=true, tweetData, isComment=false }) {
  const { _id, user, createdAt } = tweetData
  const commentCount = tweetData.comments?.length
  const content = isComment ? tweetData.comment : tweetData.content

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

  const handleNavigation = () => {
    if (allowNavigate) {
      nav(`/post/${_id}`) 
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onClick();
    }
  }
  
  return (
    <article 
      className='post-container elevated-container' 
      onClick={handleNavigation}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      >
      <div className='pfp-container' />
      <div className='v-flex'>
        <p>
          <b>{user.name}</b> <span className='text-dim'>@{user.username + (isComment ? '' :  ' · '+formatDate(createdAt))}</span> 
        </p>
        <p>
        {content}
        </p>
      </div>
      {
        isComment ? (
        <></>
        ) : (
          <div className='post-icons'>
            <div 
              className='v-flex center-content' 
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
              <p className='text-tiny'>{formatCounts(likes)}</p>
            </div>
            <div className='v-flex center-content'>
              <FaRegComment size={24} fill='var(--accent)' opacity={0.8} />
              <p className='text-tiny'>{formatCounts(commentCount)}</p>
            </div>
          </div>
        )
      }
    </article>
  );
}

export default PostItem;
