import React from 'react';
import Sidenavbar from "../Sidenavbar/Sidenavbar"
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
export default function Mul()

{
    return(
        <div>
            <Navbar/>
            <Sidenavbar/>
            <Outlet/>
        </div>
    );
}

