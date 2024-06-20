import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../../images/insight_logo.png';

const Logout = () => {
  const history = useNavigate();

  useEffect(() => {
    async function logoutUser() {
      try {
        const response = await axios.post('http://localhost:8000/logout');

        if (response.data.success) {
          // Redirect to the login page after successful logout
          history('/');
        } else {
          // Handle logout failure, if needed
        }
      } catch (e) {
        console.log(e);
      }
    }

    logoutUser();
  }, [history]);

  return (
    
    <div className="top-img">
      <img src={logo} />
      <div className="logout">
      </div>
    </div>
  );
};

export default Logout;
