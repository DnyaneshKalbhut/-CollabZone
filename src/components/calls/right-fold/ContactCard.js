import React from 'react'
import "./contactCard.css"

function ContactCard({item}) {
  return (
    <div className='contact-card'>
        <div className='contact-top'>
            <img src={item.avatar} className='contact-avatar' alt=""/>
            <div className='contact-info'>
                <label className='contact-title'>{item.name}</label>
                <label className='contact-subtitle'>{item.type}</label>
            </div>
        </div>

        <div className='contact-bottom'>
            <div className='contact-icon'>
                {/* Microphone icon */}
            </div>

            <div className='contact-icon'>
                {/* Play icon */}
            </div>

            <div className='contact-icon'>
                {/* More options icon */}
            </div>
        </div>
      
    </div>
  )
}

export default ContactCard
