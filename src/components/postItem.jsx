import React, { useState } from 'react'
import { FaRegComment, FaRegHeart, FaHeart } from 'react-icons/fa6'
import { useNavigate, useNavigation } from 'react-router-dom'

function PostItem({ allowNavigate=true }) {
  const [liked, setLiked] = useState(false)
  const nav = useNavigate()

  const handleLike = () => {
    if (liked) {
      // TODO await api request to UNLIKE
      setLiked(false)
    } else {
      // TODO await api request to LIKE
      setLiked(true)
    }
  }

  const handleNavigation = () => {
    // TODO navigate to single post page, switch id
    if (allowNavigate) {
      nav('/post/1') 
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
          <b>Nombres</b> <span className='text-dim'>@usuario · 3 days ago</span> 
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
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
          <p className='text-tiny'>135k</p>
        </div>
        <div className='v-flex center-content'>
          <FaRegComment size={24} fill='var(--accent)' opacity={0.8} />
          <p className='text-tiny'>160k</p>
        </div>
      </div>
    </article>
  );
}

export default PostItem;
