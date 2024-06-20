import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import logo from '../../images/insight_logo.png';
import '../Signup/Signup.css';

export const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [donemess, setDonemess] = useState('');
  const [contact, setContact] = useState('');
  const [age, setAge] = useState('');
  const [inst_name, setInst_name] = useState('');

  async function submit(e) {
    e.preventDefault();
    try {
      await axios
        .post('http://localhost:8000/signup', {
          email,
          password,
          name,
          contact,
          age,
          inst_name,
        })
        .then((res) => {
          if (res.data === 'exist') {
            setDonemess('User already exists');
          } else if (res.data === 'notexist') {
            setDonemess('Successfully Registered!');
          }
        })
        .catch((e) => {
          alert('Wrong details');
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="top-img">
      <img src={logo} alt="Logo" />
      <div className="signup">
        <h1>Signup</h1>
        <p style={{ color: 'green' }}>{donemess}</p>
        <form>
          <input
            type="text"
            name="name" // Add name attribute
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
            placeholder="Name"
          />
          <input
            type="text"
            name="email" // Add name attribute
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            placeholder="Email"
          />
          <input
            type="password"
            name="password" // Add name attribute
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            placeholder="Password"
          />
          <input
            type="text"
            id="contact"
            maxLength="10"
            name="contact" // Add name attribute
            placeholder="Mobile Number"
            onChange={(e) => setContact(e.target.value)}
          />
          <input
            type="text"
            id="age"
            maxLength="2"
            name="age" // Add name attribute
            placeholder="Age in number"
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            type="text"
            id="Institute"
            name="inst_name" // Add name attribute
            placeholder="Name of Institution"
            onChange={(e) => setInst_name(e.target.value)}
          />
          <input type="submit" onClick={submit} />
        </form>
        <br />
        <p>OR</p>
        <br />
        <NavLink to="/" className="Login-button">
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Signup;
