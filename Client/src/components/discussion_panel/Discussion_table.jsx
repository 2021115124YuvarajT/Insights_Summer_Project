import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Discussion_table = () => {
  const [discussions, setDiscussions] = useState([]);
  const [enteredEmail, setEnteredEmail] = useState('');
  const [filteredDiscussions, setFilteredDiscussions] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [refresh, setRefresh] = useState(false); // State to trigger refresh

  useEffect(() => {
    fetchDiscussions();
  }, [refresh]); // Fetch discussions when `refresh` changes

  const fetchDiscussions = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/discussion');
      const sortedDiscussions = response.data.discussions.sort((a, b) => {
        return a.email.localeCompare(b.email); // Sort by email ID
      });
      setDiscussions(sortedDiscussions);
      setFilteredDiscussions(sortedDiscussions); // Display all discussions initially
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilterClick = () => {
    // Reset error message
    setErrorMessage('');

    // Validate entered email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(enteredEmail)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Filter discussions based on enteredEmail
    const filteredData = enteredEmail
      ? discussions.filter((discussion) => discussion.email === enteredEmail)
      : discussions;

    // Sort filtered data
    const sortedFilteredData = filteredData.sort((a, b) => {
      return a.email.localeCompare(b.email); // Sort by email ID
    });

    setFilteredDiscussions(sortedFilteredData);

    // Display error message if no discussions match the entered email
    if (filteredData.length === 0) {
      setErrorMessage(`No discussions found for email: ${enteredEmail}`);
    }
  };

  return (
    <div style={{ margin: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Discussions</h2>

      {/* Textbox for entering email */}
      <label htmlFor="emailFilter" style={{ marginRight: '10px' }}>
        Enter Email:
      </label>
      <input
        type="text"
        id="emailFilter"
        onChange={(e) => setEnteredEmail(e.target.value)}
        value={enteredEmail}
        style={{ padding: '5px' }}
      />

      {/* Button to trigger filtering */}
      <button
        onClick={handleFilterClick}
        style={{
          marginLeft: '10px',
          padding: '8px 12px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Filter
      </button>

      {/* Display error message if any */}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      <table style={{ marginTop: '20px', width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #ddd' }}>
            <th>Email</th>
            <th>Doubts</th>
          </tr>
        </thead>
        <tbody>
          {filteredDiscussions.map((discussion) => (
            <tr key={discussion._id}>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>{discussion.email}</td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>{discussion.doubts}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Discussion_table;
