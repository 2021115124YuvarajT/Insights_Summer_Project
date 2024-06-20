import React from 'react';
import Sidenavbar from '../Sidenavbar/Sidenavbar';
import { Outlet } from 'react-router-dom';
import Navbar from "../navbar/Navbar";
const Squar = () => {
    return (
    <div>
    <Navbar/>
     <Sidenavbar/>
     <Outlet/>
    </div>
  );
};

export default Squar;
