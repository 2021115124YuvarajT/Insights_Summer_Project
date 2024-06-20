import React from 'react';
import Sidenavbar from '../Sidenavbar/Sidenavbar';
import '../division/nik_div.css'
import { Outlet } from 'react-router-dom';
import Navbar from "../navbar/Navbar";
const Squar_root = () => {
  return (
    <div>
    <Navbar/>
      <Sidenavbar/>
      <Outlet/>
    </div>
  );
};

export default Squar_root;
