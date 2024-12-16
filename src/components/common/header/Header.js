import React from 'react'
import "./header.css";

function Header() {
  return (
    <div className='header'>
      <div className='header-menu'>
      <i class="fi fi-brands-windows"></i>
      </div>

      <div className='header-leftFold'>
        <label className='header-label'>CollabZone</label>
      </div>

      <div className='header-rightFold'>
        <div className='header-search'>
        <i class="fi fi-br-search"></i>
        <input placeholder='Search'></input>
        </div>

        <div className='header-profile'>
          <div className='header-options'>
          <i class="fi fi-rs-burger-menu"></i>
          </div>

          <a href="/profile"  aria-label="View profile">
          <img className='header-pfp' 
          src='https://cdn-icons-png.flaticon.com/128/3135/3135715.png' 
          alt=''
          />

          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
