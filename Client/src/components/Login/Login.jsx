import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Login/Login.css';
import logo from '../../images/insight_logo.png';
import login_img from './login_img_1.jpg';

function getCookie(cname) {
  let name = cname + "=";//username=   username=xyz
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    } 
    //hello helloword  user=  user=   xyz
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);//startindex,endindex
    }
  }
  return "";
}

export const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errmess,setErrmess]=useState('');
  
  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);//milli seconds
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    
  }

  async function submit(e) {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/auth/login', {
        email,
        password,
      },{ withCredentials: true });
       console.log(response.data);
      if (response.data.success) {
        setCookie("user_email", email, 1);
        setCookie("user_name",response.data.name,1);
        setCookie("user_age",response.data.age,1);
        setCookie("user_contact",response.data.contact,1);
        setCookie("user_inst_name",response.data.inst_name,1);
        history('/Homepg');

      } else {
        setErrmess(response.data.message);
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="top-img">
      <img src={logo}/>
      <div className="login">
        <h1>Login</h1>
        <p style={{'color':'red'}}>{errmess}</p>
        <form action="POST">
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <input type="submit" onClick={submit} />
        </form>
        <br />
        <p>OR</p>
        <br />
        <p>Didn't signup yet? then click below.</p>
        <NavLink to="/Signup" className="signup-button">
          Signup
        </NavLink>
      </div>
    </div>
  );
};

export default Login;
export {getCookie}


