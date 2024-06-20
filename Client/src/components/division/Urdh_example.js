import React from 'react'
import './nik_div.css'
import Sidenavbar from '../Sidenavbar/Sidenavbar'
import { useNavigate } from "react-router-dom";
import step_4 from '../../images/exam04_urdh_ex_div.gif'
import step_3 from '../../images/exam03_urdh_ex_div.gif'
import step_2 from '../../images/exam02_urdh_ex_div.gif'
import step_1 from '../../images/exam01_urdh_ex_div.gif'
import step_11 from '../../images/exam101_urdh_ex_div.gif'
import step_12 from '../../images/exam102_urdh_ex_div.gif'
import step_13 from '../../images/exam103_urdh_ex_div.gif'
import step_14 from '../../images/exam104_urdh_ex_div.gif'
import step_15 from '../../images/exam105_urdh_ex_div.gif'
import step_16 from '../../images/exam106_urdh_ex_div.gif'

const Urdh_example = () => {
  const navigate=useNavigate();
  return (
    <div>
      <Sidenavbar/>
      <div class= 'body'>
      <h3 style={title}>MORE EXAMPLES ON URDHVA TIRYAKA</h3>
      <hr/>
      <table class='ex_table'>
        <tr>
          <td class='table-header'>
            <h4>EXAMPLE 1 : 42915 ÷ 83</h4>
            <p>and get the answer od quotient and remainder.</p>
          </td>
          <td class='table-header'>
            <h4>EXAMPE 2 : 69546 ÷ 57</h4>
            <p>and get the answer to a precision of one digit as decimal.</p>
          </td>
        </tr>
        <tr>
          <td>
            <h3>STEP 1:</h3>
            <p class='img-wrapper'><img src={step_4}/></p>
          </td>
          <td>
            <h3>STEP 1:</h3>
            <p class='img-wrapper'><img src={step_15}/></p>
          </td>
        </tr>
        <tr>
          <td>
            <h3>STEP 2:</h3>
            <p class='img-wrapper'><img src={step_3}/></p>
          </td>
          <td>
          <h3>STEP 2:</h3>
            <p class='img-wrapper'><img src={step_14}/></p>
          </td>
        </tr>
        <tr>
          <td>
            <h3>STEP 3:</h3>
            <p class='img-wrapper'><img src={step_2}/></p>
          </td>
          <td>
          <h3>STEP 3:</h3>
            <p class='img-wrapper'><img src={step_13}/></p>
          </td>
        </tr>
        <tr>
          <td>
            <h3>STEP 4:</h3>
            <p class='img-wrapper'><img src={step_1}/></p>
          </td>
          <td>
          <h3>STEP 4:</h3>
            <p class='img-wrapper'><img src={step_12}/></p>
          </td>
        </tr>
        <tr>
          <td>
            <p>The Remainder is 25 - 3 x 7  = 4 
              <br/>The Quotient is 517.</p>    
          </td>
          <td>
          <h3>STEP 5:</h3>
            <p class='img-wrapper'><img src={step_11}/></p>
            <p>Instead of calculating the remainder,<br/>we'll proceed further to get an <br/>answer after the decimal point</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Thus we got the the answers</p>   
          </td>
          <td>
          <h3>STEP 6:</h3>
            <p class='img-wrapper'><img src={step_16}/></p>
          </td>
        </tr>
      </table>
      <br/>
      <button style={{'margin-left':'30%'}}  className="back" onClick={()=>navigate(-1)}>Back to URDHVA TIRYAKA page</button><br/>
      <br/>
    </div>
  </div>
   
  )
}

export default Urdh_example

const title={
  marginLeft:'30%',
  fontSize:'medium'
}
