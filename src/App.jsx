import './css/App.css'
import Home from './components/home/index'
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation, redirect } from 'react-router-dom'
import CreatePostSection from './components/createPostSection'

import Login from './components/login'
import NavBar from './components/Navbar'
import SignUp from './components/signup'
import PostPage from './components/postPage'

const Layout = ({ children }) => {
  const location = useLocation();
  const isAuthPage = ['/login', '/signup'].includes(location.pathname);
  
  if (isAuthPage) {
    return(
      <div className='v-flex center-content w-full'>
        {children}
      </div>
    )
  }
  
  return (
    <div id='app-body'>
      <NavBar isAuthPage={isAuthPage} />
      <section id='main-content'>
        <section id='content-section' className='v-flex'>
          {children}
        </section>
        {location.pathname.startsWith('/post/') ? <></> : <CreatePostSection />}
      </section>
    </div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(false)

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Home />} />
          <Route path="/profile" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/post/:id" element={<PostPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App
