import React from 'react';
import './styles.scss';
import { Message } from './Message';

const ChatWrapper: React.FC = () => {
  return (
    <div className='chat-wrapper'>
      <div className='top'>
        <div className='image'></div>

        <div className='details'>Charles Kamiri</div>

        <div className='icons'>
          <i className='bx bx-phone'></i>
          <i className='bx bx-video'></i>
          <i className='bx bx-link-alt'></i>
          <i className='bx bx-dots-vertical-rounded'></i>
        </div>
      </div>

      <div className="mid">
        <Message />
        <Message />
        <Message />
      </div>

      <div className="bottom">
        <div className='input-wrapper'>
          <i className='bx bx-microphone'></i>
          <input type='text' placeholder='Message' />
          <i className='bx bx-send'></i>
        </div>
      </div>
    </div>
  );
};

export default ChatWrapper;