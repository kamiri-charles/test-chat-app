import React from 'react';
import './styles.scss';
import { Chat } from './Chat';

const Navbar: React.FC = () => {
  return (
    <div className='navbar'>

      <div className='header'>
        <div className="brand">Test Chat App</div>
          <div className='search'>
            <input type='text' placeholder='Search' />
            <i className='bx bx-search'></i>
          </div>
      </div>

      <div className="chats">
        <Chat />
        <Chat />
        <Chat />
      </div>

      <div className="options">
        <i className="bx bx-user"></i>
        <i className="bx bx-cog"></i>
        <i className="bx bx-exit"></i>
      </div>
      
    </div>
  )
}

export default Navbar;