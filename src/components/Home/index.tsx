import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import ChatWrapper from '../ChatWrapper';

const Home: React.FC = () => {

  let nav = useNavigate();

  useEffect(() => {
    // If the user is not logged in, redirect to the login page
    if (!localStorage.getItem('tca_data')) nav('/sign-in');
  }, [nav]);
  
  return (
    <div className='home'>
        <Navbar />
        <ChatWrapper />
    </div>
  )
}

export default Home