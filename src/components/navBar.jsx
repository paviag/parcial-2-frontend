import React from 'react';
import { NavLink } from 'react-router-dom'
import { FaUser } from 'react-icons/fa6'
import { RiSearchLine } from 'react-icons/ri'
import { GoHomeFill } from 'react-icons/go'
import '../css/App.css'
import IconTitleContainer from './iconTitleContainer'


const NLinkContent = ({ IconT, name }) => {
  return (
    <>
      <IconT strokeWidth={2} size={27} />
      <span><b>{name}</b></span>
    </>
  )
}

const NavBar = () => {

  return (
    <nav className='navbar'>
      <IconTitleContainer />
      <section className='nav-links'>
        <NavLink to='/' className='nav-item'>
          {({ isActive }) => (
            <NLinkContent IconT={GoHomeFill} name={'Home'} />
          )}
        </NavLink>
        <NavLink to='/search' className='nav-item'>
          {({ isActive }) => (
            <NLinkContent IconT={RiSearchLine} name={'Search'} />
          )}
        </NavLink>
        <NavLink to='/profile' className='nav-item'>
          {({ isActive }) => (
            <NLinkContent IconT={FaUser} name={'Profile'} />
          )}
        </NavLink>
      </section>
    </nav>
  );
};

export default NavBar;
