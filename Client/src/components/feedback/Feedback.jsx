import React, { useState, useEffect } from 'react';
import "../feedback/Feedback.css"
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import { getCookie } from '../Login/Login'; // Import getCookie function

const Feedback = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [donemess, setDonemess] = useState('Provide your Feedback');

  useEffect(() => {
    // Retrieve the email from cookies on component mount
    const userEmail = getCookie('user_email');
    setEmail(userEmail);
  }, []);

  async function submit(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/feedback", {
        email,
        message
      })
      .then(res => {
        if (res.data === "done") {
          setDonemess("Feedback is submitted");
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='form-form'>
      <div className='form-top'>
        <h2 className='ttile'>{donemess}</h2>
        <form method='POST'>
          <div className='email'>
            <label htmlFor="email">Email:</label>
            <input
              style={{ 'width': '300px' }}
              type="email"
              id="email"
              name="email"
              value={email} // Use the email from cookies
              readOnly // Make the field read-only
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea rows="5" cols="60"
              id="message"
              name="message"
              onChange={(e) => { setMessage(e.target.value) }}
              required
            />
          </div>
          <button type="submit" onClick={submit}>Submit Feedback</button>
        </form>
      </div>
      <button style={{ 'border-radius': '60px', 'margin-left': '15%' }} onClick={() => navigate('/Homepg')}>Return back to Home page</button>
    </div>
  );
};

export default Feedback;
