import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./discussion.css"
import Discussion_table from './Discussion_table';

// Function to get the value of a specific cookie
const getCookie = (cname) => {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

const Discussion = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [doubts, setDoubts] = useState('');
  const [successMessage, setSuccessMessage] = useState('Send your doubts here');
  const [errorMessage, setErrorMessage] = useState('');
  const [discussions, setDiscussions] = useState([]); 

  useEffect(() => {
    // Set the email from the cookie when the component mounts
    const userEmail = getCookie('user_email');
    if (userEmail) {
      setEmail(userEmail);
    }
    // Fetch discussions on mount
    fetchDiscussions();
  }, []);

  async function submit(e) {
    e.preventDefault();

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    try {
      await axios.post('http://localhost:8000/api/discussion', { email, doubts })
        .then(res => {
          if (res.data === 'done') {
            setSuccessMessage('Doubts submitted successfully!');
            setDoubts('');
            setErrorMessage('');
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDiscussions = async () => {
    try {
      const response = await axios.get('http://localhost:8000/discussion');
      setDiscussions(response.data.discussions);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="login">
        <h1 className="ttile">Ask Your Doubts here</h1>
        <p style={{ 'color': 'blue' }}>{successMessage}</p>
        {errorMessage && <p style={{ 'color': 'red' }}>{errorMessage}</p>}
        <form>
          <label>Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email} 
            readOnly// Set the email from cookie
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Doubts:</label>
          <textarea rows="7" cols="60"
            id="message"
            name="message"
            onChange={(e) => setDoubts(e.target.value)}
            required
          />

          <input type="submit" value="Submit your doubt" onClick={submit} />
        </form>
        <br />
      </div>
      <button style={{ 'borderRadius': '60px', 'marginLeft': '40%' }} onClick={() => navigate('/Homepg')}>Return back to Home page</button>
      <Discussion_table discussions={discussions} />
    </div>
  );
};

export default Discussion;
