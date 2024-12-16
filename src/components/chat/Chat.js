import React from 'react';
import ChatHeader from './ChatHeader';
import ChatBody from './ChatBody';
import ChatInput from './ChatInput';  // Make sure this import is correct
import './chat.css';

function Chat() {
  return (
    <div className='chat-container'>
      <ChatHeader />
      <ChatBody />
      <ChatInput />  {/* This should be rendering the chat input */}
    </div>
  );
}

export default Chat;
