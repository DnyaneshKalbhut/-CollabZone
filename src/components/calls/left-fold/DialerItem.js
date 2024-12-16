import React from 'react'
import './dialerItem.css'

function DialerItem({item}) {
  return (
    <div className='dialer-item'>
        <img src={item.avatar} className='item-avatar'  alt=""/>

        <div className='item-info'>
            <label className='item-title'>{item.name}</label>
            <label className='item-subtitle'>{item.type}</label>
        </div>

        <div className='item-sub-icons'>
            <div className='item-sub-icon'>
            <i class="fi fi-ss-circle-microphone"></i>
            </div>

            <div className='item-sub-icon'>
            <i class="fi fi-ss-video-camera-alt"></i>
            </div>
        </div>
    </div>
    
  )
}

export default DialerItem
