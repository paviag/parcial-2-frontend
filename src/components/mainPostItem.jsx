import React, { useState } from 'react'
import { FaRegComment, FaRegHeart, FaHeart } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

function MainPostItem() {
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
    nav('/post/1')
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
          <b>Nombres</b> <span className='text-dim'>@usuario · 3 days ago</span> 
        </p>
      </div>
      
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
          <p>135k</p>
        </div>
        <div className='h-flex'>
          <FaRegComment size={25} fill='var(--accent)' opacity={0.8} />
          <p>160k</p>
        </div>
      </div>
    </article>
  );
}

export default MainPostItem;