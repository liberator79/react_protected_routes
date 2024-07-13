import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const userState = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    userState.setUser(true);
    navigate('/');  
  };

  return (
    <div>
      This is login page
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login
