import React, { useState , useEffect } from 'react';
import { useLocation,NavLink } from 'react-router-dom';
import "./Sidenavbar.css";

const Sidenavbar = () => 
{
    const NavStyle = ({ isActive }) => {
      return {
            fontWeight: isActive ? 'bolder' : 'larger',
            color: isActive ? '#F8CF50' : 'white',
        };
    };
    const location = useLocation();
    const [navigationItems, setNavigationItems] = useState([]);
    useEffect(
      ()=>{
        let currentPage = location.pathname;
        let items=[];
    
      if(currentPage === '/division' || currentPage==='/division/nik_div' || currentPage==='/division/intro' ||
      currentPage==='/division/Urdh_div' || currentPage==='/division/urdh_ex' || currentPage==='/division/3_digit_num' || 
      currentPage==='/division/div_not_9' || currentPage==='/division/ex_2' ||
      currentPage==='/division/part_div_neg' || currentPage==='/division/answer_to_ques_part_div_neg' ||
      currentPage==='/division/few_ex' || currentPage==='/division/is_there_a_way_out' || currentPage==='/division/exercise')
      {
        items = [
          { label: 'INTRODUCTION', link: '/division/intro' },
          { label: 'NIKILAM', link: '/division/nik_div' },
          { label: 'URDHVA TIRYAKA', link: '/division/Urdh_div' },
          { label: 'EXERCISES', link: '/division/exercise' },
        ];
      }
      else if(currentPage==='/place_val' || currentPage==='/place_val/smallstory' || currentPage==='/place_val/M_behind' || currentPage==='/place_val/Mishrank' || currentPage==='/place_val/try_place_val'){
        items = [
          { label: 'A small Story', link: '/place_val/smallstory' },
          { label: 'Maths Behind PVS', link: '/place_val/M_behind' },
          { label: 'Mishrank', link: '/place_val/Mishrank' },
          { label: 'Try these', link: '/place_val/try_place_val'}
        ];
      }
      else if (currentPage === '/mul' || currentPage==='/mul/MulIntro' || currentPage === '/mul/Nikhilam' || currentPage==='/mul/Urdvha') {
        items = [
          { label: 'Introduction', link: '/mul/MulIntro' },
          { label: 'Nikhilam', link: '/mul/Nikhilam' },
          { label: 'Urdvha Tiryagbyam', link: '/mul/Urdvha' },
        ];
      }
      else if(currentPage === '/squar_root' || currentPage === '/squar_root/urdh_sq' || currentPage === '/squar_root/mishrank' 
      || currentPage === '/squar_root/exercise' || 
      currentPage === '/squar_root/more_ex' || currentPage === '/squar_root/urdh_sq_ex' || currentPage === '/squar_root/exer_2')
        {
          items = [
            { label: 'URDHVA TIRYAKA', link: '/squar_root/urdh_sq' },
            { label: 'MISHRANK', link: '/squar_root/mishrank' },
            { label: 'EXERCISES', link: '/squar_root/exercise' },
            { label: 'MORE EXAMPLES', link: '/squar_root/more_ex' },
          ];
        }
        else if(currentPage === "/squar" || currentPage === '/squar/squar_intro' || currentPage==="/squar/dwanda" || currentPage==="/squar/squar_method" || currentPage === "/squar/squar_examples" || currentPage==="/squar/squar_method" || currentPage==="/squar/squar_exercises"){
          items=[
            {label:'Introduction',link:'/squar/squar_intro'},
            {label:'Dwanda',link:'/squar/dwanda'},
            {label:'The Method',link:'/squar/squar_method'},
            {label:'Examples',link:'/squar/squar_examples'},
            {label:'Exercises',link:'/squar/squar_exercises'}
          ];
        }
        else if(currentPage === '/misc' || currentPage === '/misc/reciprocal' || currentPage === '/misc/cubes' || currentPage === '/misc/how' ||
        currentPage === '/misc/ex' || currentPage === '/misc/rec_19' || currentPage === '/misc/mishrank')
          {
            items = [
              { label: 'RECIPROCAL', link: '/misc/reciprocal' },
              { label: 'CUBE-NORMAL METHOD', link: '/misc/cubes' },
              { label: 'CUBE-MISHRANK METHOD', link: '/misc/mishrank' },
              { label: 'HOW THE CUBING  METHOD WORKS?', link: '/misc/how' },
              { label: 'EXERCISES  IN CUBING', link: '/misc/ex' },
            ];
          }
        
        if (currentPage === '/mul' || currentPage==='/mul/MulIntro' || currentPage === '/mul/Nikhilam' || currentPage==='/mul/Urdvha') {
            items = [
              { label: 'Introduction', link: '/mul/MulIntro' },
              { label: 'Nikhilam', link: '/mul/Nikhilam' },
              { label: 'Urdvha Tiryagbyam', link: '/mul/Urdvha' },
            ];
          }
          else if(currentPage==='/place_val' || currentPage==='/place_val/smallstory' || currentPage==='/place_val/M_behind' || currentPage==='/place_val/Mishrank' || currentPage==='/place_val/try_place_val'){
            items = [
              { label: 'A small Story', link: '/place_val/smallstory' },
              { label: 'Maths Behind PVS', link: '/place_val/M_behind' },
              { label: 'Mishrank', link: '/place_val/Mishrank' },
              { label: 'Try these', link: '/place_val/try_place_val'}
            ];
          }
          else if(currentPage === "/squar" || currentPage === '/squar/squar_intro' || currentPage==="/squar/dwanda" || currentPage==="/squar/squar_method" || currentPage === "/squar/squar_examples" || currentPage==="/squar/squar_method" || currentPage==="/squar/squar_exercises"){
            items=[
              {label:'Introduction',link:'/squar/squar_intro'},
              {label:'Dwanda',link:'/squar/dwanda'},
              {label:'The Method',link:'/squar/squar_method'},
              {label:'Examples',link:'/squar/squar_examples'},
              {label:'Exercises',link:'/squar/squar_exercises'}
            ];
          }
          else if(currentPage === '/divs' || currentPage === '/divs/divs_intro' || currentPage === "/divs/divs_how" ||
          currentPage === "/divs/divs_exercise" || currentPage === "/divs/divs_eka" || 
          currentPage === "/divs/divs_better" || currentPage === "/divs/divs_negative")
          {
            items = [
              {label:'Introduction',link:'/divs/divs_intro'},
              {label:'The Ekadhika',link:"/divs/divs_eka"},
              {label:'Negative Ekadhika',link: "/divs/divs_negative"},
              {label:'Better Techniqes.',link:"/divs/divs_better"},
              {label:'Exercises',link:"/divs/divs_exercise"},
              {label:'How does it work?',link:"/divs/divs_how"}
            ]
          }
        setNavigationItems(items);
      },[location.pathname])
  return (
    <div className="container">
      <nav className="sidebar">
        <ul className="navbar-items">
          {navigationItems.map((item,index) => (
            <li key={index} className="navbar-item" 
            style={{backgroundColor:item.link === location.pathname ? '#111' : '',}}>
              <NavLink style={NavStyle} to={item.link}>{item.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidenavbar
