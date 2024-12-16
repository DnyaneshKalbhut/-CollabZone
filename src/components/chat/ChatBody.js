import React from 'react';
import './chat.css';

function ChatBody() {
  const messages = [
    { id: 1, sender: 'You', text: 'Hello !', time: '10:00 AM' },
    { id: 2, sender: 'Prathmesh', text: 'Hi! How are you?', time: '10:01 AM' },
    { id: 3, sender: 'You', text: 'I’m doing great, thanks! 😊', time: '10:02 AM' },
  ];

  return (
    <div className='chat-body'>
      {messages.map((msg) => (
        <div key={msg.id} className={`chat-message ${msg.sender === 'You' ? 'sent' : 'received'}`}>
          <p className='chat-text'>{msg.text}</p>
          <span className='chat-time'>{msg.time}</span>
        </div>
      ))}
    </div>
  );
}

export default ChatBody;
