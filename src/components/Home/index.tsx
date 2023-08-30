import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import ChatWrapper from '../ChatWrapper';

const Home: React.FC = () => {

  let nav = useNavigate();

  let [conversations, setConversations] = useState([]);
  let [friends, setFriends] = useState([]);


  useEffect(() => {
    // If the user is not logged in, redirect to the login page
    if (!localStorage.getItem('tca_data')) nav('/sign-in');

    const tcaData = JSON.parse(localStorage.getItem("tca_data") || "{}"); // Parsing as an object with default value {}


    // Fetch friends
    if (tcaData && tcaData.id) {
      fetch(`https://tca-backend.azurewebsites.net/api/users/${tcaData.id}/friends`)
        .then(res => res.json())
        .then(data => setFriends(data))
        .catch(err => console.log(err))
    } else {
      nav('/sign-in')
    };

    // Fetch convos where the user is a participant
    if (tcaData && tcaData.id) {
      fetch(`https://tca-backend.azurewebsites.net/api/conversations/${tcaData.id}`)
        .then(res => res.json())
        .then(data => setConversations(data))
        .catch(err => console.log(err))
    } else {
      nav('/sign-in')
    }

  }, [nav]);
  
  return (
    <div className='home'>
        <Navbar friends={friends} chats={conversations} />
        <ChatWrapper data={[]} />
    </div>
  )
}

export default Home