import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./discussion.css"
import Discussion_table from './Discussion_table';

const Discussion = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [doubts, setDoubts] = useState('');
  const [successMessage, setSuccessMessage] = useState('Send your doubts here');
  const [errorMessage, setErrorMessage] = useState('');
  const [discussions, setDiscussions] = useState([]); 

  async function submit(e) {
    e.preventDefault();

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    try {
      await axios.post('http://localhost:8000/discussion', { email, doubts })
        .then(res => {
          if (res.data === 'done') {
            setSuccessMessage('Doubts submitted successfully!');
            setEmail('');
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
