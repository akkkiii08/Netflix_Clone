import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { useRef,useEffect } from 'react';
import { logout } from '../../firebase'

const Navbar = () => {
  const navRef=useRef();

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY >= 80){
        navRef.current.classList.add('nav-dark')
      }else{
        navRef.current.classList.remove('nav-dark')
      }
    })

  },[])

  
  return (
    <div className='navbar' ref={navRef}>
      <div className="navbar-left">
        <img src={logo} alt="Netflix Logo" />
        <ul>
          <li>Home</li>
          <li>TV shows</li>
          <li>Movies</li>
          <li>New & popular</li>
          <li>My list</li>
          <li>Browse by languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="Search Icon" className='icons'/>
        <p>children</p>
        <img src={bell_icon} alt="Bell Icon" className='icons' />
        <div className="navbar-profile">
          <img src={profile_img} alt="Profile Image" />
          <img src={caret_icon} alt="Caret Icon" />
          <div className="dropdown">
            <p onClick={()=>{logout()}}>
              Sign out of Netflix
            </p>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default Navbar
