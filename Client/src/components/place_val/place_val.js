import React from 'react';
import Sidenavbar from '../Sidenavbar/Sidenavbar';
import { Outlet } from 'react-router-dom';
import Navbar from "../navbar/Navbar";
const Place_val = () => {
  return (
    <div>
    <Navbar/>
    <Sidenavbar/>
    <Outlet/>
    </div>
  );
};
export default Place_val;
