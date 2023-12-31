import React from 'react';

interface ChatProps {
  data: any,
};

export const Chat: React.FC<ChatProps> = () => {
  return (
    <div className='chat'>
        <div className='image'></div>

        <div className='meta'>
            <div className='name'>Charles Kamiri</div>
            <div className='quote'>Hello World!</div>
        </div>

        <div className="last-seen">
            {Math.random() > 0.5 ? 'Online' : "12:00am"}
        </div>
    </div>
  )
};