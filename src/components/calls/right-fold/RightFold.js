import React from 'react'
import './rightfold.css'
import { CallsContact } from '../../../data/CallsContact'
import ContactCard from './ContactCard';

function RightFold() {
  const contacts = CallsContact;

  return (
    <div className='right-fold'>
      <div className='rightfold-heading'>
        <label className='heading-label'>Contacts</label>
      </div>

      <div className='rightfold-options'>
        <div className='contact-search'>
          <input type='text' placeholder='Find a Contact' />
          <div className='contact-search-icon'>
          <i class="fi fi-br-search"></i>
          </div>
        </div>

        <div className='add-button'>
          <div className='add-icon'>
          <i class="fi fi-ss-user-add"></i>
          </div>
          <label className='add-label'>Add Contact</label>

        </div>

      </div>

      <div className='contact-list'>
        {
          contacts.map((item)=> {
            return <ContactCard item={item} />
          })
        }

      </div>
    </div>
  )
}

export default RightFold
