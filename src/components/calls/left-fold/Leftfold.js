import React from 'react'
import './leftFold.css'
import { CallsMenu, DialerList } from '../../../data/CallsData'
import MenuItem from './MenuItem'
import DialerItem from './DialerItem'

function Leftfold() {

  // Importing from CallsData.js
  const menu=CallsMenu
  const dialerList = DialerList;
  
  return (
    <div className='leftFold'>
      {/* This is Menu Section */}
      <div className='leftFold-menu'>
        {/* This is Page Heading */}
        <label className='menu-label'>Calls</label>
        {/* This is Contents Inside Left Fold Menu */}
        <div className='menu-items'>
          {
            menu.map((items) => {
              return <MenuItem items={items}/>
            })
          }
        </div>
      </div>

      {/* Dialer Section */}
      <div className='leftFold-dialer'>
          <label className='dialer-label'>Make a Call</label>
          <div className='dialer-search'>
            <input placeholder='Search'></input>
          </div>

          <div className='dialer-suggested'>
            <label className='suggested-label'>Suggested</label>
              <div className='suggested-list'>
              {
                dialerList.map((item) => {
                  return <DialerItem item={item} />
                })
              }
            </div>
          </div>

          {/* Need to work on this */}
          <div className='dialer-bottom'>

            <div className='dialer-bottom-icon'>
              {/* THis will contain mic icon */}
            </div>

            <div className='dialer-bottom-icon'>
              {/* This will contain video icon */}
            </div>  

          </div>

      </div>
    </div>
  )
}

export default Leftfold
