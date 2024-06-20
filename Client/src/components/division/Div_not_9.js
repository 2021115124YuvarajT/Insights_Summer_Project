import React from 'react'
import './nik_div.css'
import Sidenavbar from '../Sidenavbar/Sidenavbar'
import { useNavigate } from "react-router-dom";
import ex_1 from '../../images/div_not_9_ex001.gif'
import ex_2 from '../../images/div_not_9_exo2.gif'
const Div_not_9 = () => {
    const navigate=useNavigate();
  return (
    <div>
    <Sidenavbar/>
    <div className="body">
    <h3 class='main_heading'>DIVISION WHEN DIVISOR IS NOT 9</h3>
    <hr/>
    <p>For divisors other than 9 the nikhilam sutra ( all from 9 and the last from 10 is used ). 
        For 9, subtracting 9 from 10 we get 1 as the multiplier.
    </p>
    <p> Consider the problem 23 ÷  9 .</p>
    <ol>
        <li> We write the tens digit as such. </li>
        <li>Then multiply it by 1 (multiplier) to get 2</li>
        <li>Add it to 3 to get 5 as the remainder.</li>
    </ol>
    <p>In case if 23 ÷ 8:</p>
    <ol>
        <li>First , write the tens digit as such.</li>
        <li>Multiply it by 2 ( 10-8=2, the multiplier in this case ) to get 4. </li>
        <li>Add it to 3 to get 7 as the remainder. Quotient is 2 and remainder is 7.</li>
    </ol>
    <p class='img-wrapper'><img src={ex_1}/></p>
    <p>In this technique, if the remainder exceeds the divisor, carry out the procedure as already illustrated.</p>
    <p>Other examples. 1223 divided by 98.</p>
    <p>Here the last two digits are marked as remainders.</p>
    <p class='img-wrapper'><img src={ex_2}/></p>
    <p>A limitation of the nikhilam method is that, it is suitable only for numbers close to 10, 100 ,1000 and so on. 
        But a general technique called Urdhva Tiryaka  exists for handling general division.
    </p>
    <button style={{'margin-left':'35%'}} className="back" onClick={()=>navigate(-1)}>Back to NIKILAM page</button><br/>
    <br/>
    </div>
</div>
  )
}

export default Div_not_9
