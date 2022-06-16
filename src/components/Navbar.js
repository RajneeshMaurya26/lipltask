import React from 'react'
import "./Navbar.css"
import a from './../img/a.png';
const Navbar = () => {
  return (
    <>
      <div className='col-sm-3'>
        <div className='logo'>
          <img className='logo-img' src={a}></img>&nbsp;&nbsp;
          <span className='logo-name'>Stringer</span>
        </div>
      </div>
      <div className='col-sm-6'>
        <div className='menu-link'>
          <ul>
            <li><a href=''>Home</a></li>
            <li><a href=''>Games</a></li>
            <li><a href=''>Explore</a></li>
            <li><a href=''>User Guide</a></li>
            <li><a href=''>Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className='col-sm-3'>
        <div className='profile'>
          <div className='profile-1'>
            <div className='profile-11'>
              <span>P</span>
            </div>
          </div>
          <div className='profile-2'>
            <span className='username'>Username<br /> Point</span>
            <div className='profile-21'>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Navbar