import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Chat } from './Chat';
import './styles.scss';

const Navbar: React.FC = () => {

  let nav = useNavigate();

  let sign_out = () => {
    localStorage.removeItem('tca_data');
    nav('/sign-in');
  };

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
        <i className="bx bx-exit" onClick={sign_out}></i>
      </div>
      
    </div>
  )
}

export default Navbar;