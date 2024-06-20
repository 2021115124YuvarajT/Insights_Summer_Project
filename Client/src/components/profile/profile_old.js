import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getCookie } from '../Login/Login';
import './profile.css';

const Profile = (props) => {
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [age, setAge] = useState('');
  const [inst_name, setInst_name] = useState('');
  const history = useNavigate();
  useEffect(() => {
    // Fetch the user details from cookies and set the state
    setEmail(getCookie("user_email"));
    setContact(getCookie("user_contact"));
    setAge(getCookie("user_age"));
    setInst_name(getCookie("user_inst_name"));
  }, []); // Empty dependency array to run the effect only once when the component mounts

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleContactChange = (e) => {
    setContact(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleInstNameChange = (e) => {
    setInst_name(e.target.value);
  };

  const handleBackHomeClick = () => {
    history('/Homepg');
  };

  return (
    <div className="body">
      <div className="profile">
        <h1>User Profile</h1>
        <div>
        <img class="profile_img" src="https://source.unsplash.com/600x300/?student" alt="student dp"/>
        </div>
        <p>Name: {getCookie("user_name")}</p>
       <p>Email:{email}</p>
        <p>Mobile Number:{getCookie("user_contact")}</p>
        <p>Age:{getCookie("user_age")}</p>
        <p>Institute:{getCookie("user_inst_name")}</p>
        <button onClick={handleBackHomeClick} className="home-button">Back Home</button>
      </div>
    </div>
  );
};

export default Profile;
