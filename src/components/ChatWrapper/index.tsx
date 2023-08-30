import React from 'react';
import './styles.scss';
import { Message } from './Message';
import { Default } from './Default';

interface ChatWrapperProps {
  data: []
};

const ChatWrapper: React.FC<ChatWrapperProps> = ({data}) => {

  return (
    <div className='chat-wrapper'>
      {data.length !== 0 ? (
        <>
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
        </>
      ): <Default />}
    </div>
  );
};

export default ChatWrapper;