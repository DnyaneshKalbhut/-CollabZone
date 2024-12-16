import React from 'react';
import './chat.css';

function ChatHeader() {
  return (
    <div className='chat-header'>
      <h3>COllABZONE</h3>
      <div className='chat-options'>
        <i className='fi fi-ss-search'></i>
        <i className='fi fi-ss-menu-dots'></i>
      </div>
    </div>
  );
}

export default ChatHeader;
