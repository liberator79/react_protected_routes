import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
const Home = () => {
  const navigate = useNavigate();
  const userState = useContext(UserContext);

  const handleLogout = () => {
    userState.setUser(false);
    navigate("/login");
  };

  return (
    <div>
      This is home page
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home
