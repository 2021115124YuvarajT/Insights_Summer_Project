import React from 'react'
import Sidenavbar from '../Sidenavbar/Sidenavbar'
import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
const Divs = () => 
{
  return (
    <div >
      <Navbar/>
      <Sidenavbar/>
      <div>
      <Outlet />
      </div>
    </div>
  )
}

export default Divs;
const topcontainer={
  marginLeft:'250px',
  marginTop:'0px'
}