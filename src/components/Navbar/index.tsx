import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavbarEmpty } from './NavbarEmpty';
import { Chat } from './Chat';
import './styles.scss';

interface NavbarProps {
  friends: any[],
  chats: any[],
}

const Navbar: React.FC<NavbarProps> = ({friends, chats}) => {

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

      <div className="options">
        <i className="bx bx-user"></i>
        <i className="bx bx-cog"></i>
        <i className="bx bx-exit" onClick={sign_out}></i>
      </div> 




      {chats.length > 0 && friends.length > 0 ? (
        <div className="conversations">

          {friends.map((friend, index) => {
            return <Chat key={index} data={friend} />
          })}
          
          {chats.map((chat, index) => {
            return <Chat key={index} data={chat} />
          })}
        </div>

      ): <NavbarEmpty /> };
      
    </div>
  )
}

export default Navbar;