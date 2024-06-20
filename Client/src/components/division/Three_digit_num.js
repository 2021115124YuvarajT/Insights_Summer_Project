import React from 'react'
import './nik_div.css'
import Sidenavbar from '../Sidenavbar/Sidenavbar'
import { useNavigate } from "react-router-dom";
import ex_1 from '../../images/ex1_3_digit_num.gif'

const Three_digit_num = () => {
  const navigate=useNavigate();
  return (
    <div>
        <Sidenavbar/>
        <div className="body">
        <h3 class='main_heading'>DIVISION OF 3 DIGIT NUMBERS</h3>
        <hr/>
        <p>The simple technique illustrated in the previous page, works elegantly for two digit numbers. 
        It can be extended to work with numbers having any number of digits. The Method is as follows:-
        </p>
        <p>For Numbers having 3 digits, Write down the hundreds digit as such. 
        Then add it to the tens digit To get the second digit of the quotient.
        Add the digit obtained in the previous step to the units digit of the divisor to get the remainder.(e.g.)
        </p>
        <p class='img-wrapper'><img src={ex_1}/></p>
        <p>This method can be extended for divisors with any number of digits.</p>
        <button style={{'margin-left':'35%'}} className="back" onClick={()=>navigate(-1)}>Back to NIKILAM page</button><br/>
        </div>
        <br/>
    </div>
  )
}

export default Three_digit_num
