import React from 'react'
import './nik_div.css'
import Sidenavbar from '../Sidenavbar/Sidenavbar'
import { useNavigate } from 'react-router-dom'
import ex_301 from '../../images/few_examples_exam301.gif'
import ex_302 from '../../images/few_examples_exam302.gif'
import cross1 from '../../images/few_examples_cross1.gif'
import cross2 from '../../images/few_examples_cross2.gif'

const Few_ex = () => {
  const navigate=useNavigate();
  return (
    <div>
      
    <div className="body">
    <h2 class='main_heading'>FEW EXAMPLES</h2>
    <hr/>
    <p>Let's now look at a few more examples  where the divisors have more than two digits.</p>
    <p>198467 by 478</p>
    <p class='img-wrapper'><img src={ex_301}/></p>
    <p>We stop the process when there is 1 digit remaining in the dividend</p>
    <p>The quotient is 415. To find the remainder, consider the next digit of the quotient to be 0. 
        Now subtract the cross product of the last two digits of the divisor and the quotient from 137</p>
    <p>Remainder = 137 - (7 x 0 + 8 x 5) = 137 - 40 = 97</p>
    <p>5798204 by 6328</p>
    <p class='img-wrapper'><img src={ex_302}/></p>
    <p>We stop the process when there are two digits remaining.</p>
    <p>The quotient  is  916</p>
    <p>The remainder is calculated in the following way. The final partial dividend is 20. Prefix it to the next dividend digit, which is 0, to get 200. Now assume that the next digit of the quotient is 0.
    Find the cross product of the last three (three is one less than the total digits of the divisor)
    digits of the divisor and the last three digits of the quotient.</p>
    <p class='img-wrapper'><img src={cross1}/></p>
    <p>The cross product is 20. Subtract this from 200 to get 180 as the next partial dividend. The first digit of this P.D (which is 1), 
        is the fist digit of the remainder. Drop that 1 to get 80 as the P.D. Prefix this to the last digit of the dividend to get 804 as the next P.D.
        Now, consider the next digit of the quotient as 0, and find the cross product as before.</p>
    <p class='img-wrapper'><img src={cross2}/></p>
    <p>This value is 48. Subtract his from 804 to get 756 as the last digts of the remainder. Thus the final remainder is 1756.</p>
    <p>In general, while computing the remainder, at each stage, we can get 1 digit of the remainder, and drop that digit from the partial dividend.</p>
    <button style={{'margin-left':'45%'}}onClick ={()=>navigate(-1)}>BACK TO WHERE YOU LEFT</button>
    <br/>
    <hr/>
    </div>
    </div>
  )
}

export default Few_ex
