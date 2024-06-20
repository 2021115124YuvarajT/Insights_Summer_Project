import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidenavbar from '../Sidenavbar/Sidenavbar';
import Navbar from '../navbar/Navbar';
export default function Div()
{
  return ( 
    <div>
      <Navbar/>
      <Sidenavbar/>
      <Outlet/>
    </div>
    
  );
}



