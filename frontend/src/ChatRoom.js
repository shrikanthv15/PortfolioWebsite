import React, { useState } from 'react';
import axios from 'axios';
import "./chatroom.css"
const ChatRoom = () => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = async () => {
    try {
        await axios.post('https://shy-lime-lamb-boot.cyclic.app/send-message', { text: message });
        setMessage(''); // Clear the input field after sending the message
        alert("Message Sent!");
    } catch (error) {
        console.error('Error sending message:', error);
    }
};

  return (
    <div className='chatroom-container'>
      <textarea
        className='message-input'
        value={message}
        onChange={handleMessageChange}
        placeholder="Type your message..."
        rows={4}
        cols={50}
      />
      <br />
      <button className='send-button' onClick={sendMessage}>Send Message</button>
    </div>
  );
};

export default ChatRoom;
