import React from 'react'
import Sidenavbar from '../Sidenavbar/Sidenavbar';
import '../division/nik_div.css'
import { NavLink,useNavigate } from 'react-router-dom'
import mish3 from '../../images/sq_urdh_ex_mish3 (1).gif'
import mish4 from '../../images/sq_urdh_ex_mish4 (1).gif'
import mish5 from '../../images/sq_urdh_ex_mish5 (1).gif'
import mish6 from '../../images/sq_urdh_ex_mish6 (1).gif'
import mish7 from '../../images/sq_urdh_ex_mish7 (1).gif'
import corr1 from '../../images/sq_urdh_ex_corr1 (1).gif'
import corr2 from '../../images/sq_urdh_ex_corr2 (1).gif'
import corr3 from '../../images/sq_urdh_ex_corr3 (1).gif'
const Urdh_sq_ex = () => {
    const navigate=useNavigate();
  return (
    <div>
        <Sidenavbar/>
      <div class='body'>
        <h3 className="main_heading">URDHA TIRYANKA METHOD-MORE EXAMPLES</h3>
        <hr/>
        <p>Our previous example of  finding the square root  was a simple one. There were no corrections in the partial dividend.
        However, like straight division, here too, corrections may occur. We'll look at one such example where there are corrections.
        Consider the number 1947. Let us find its square root to a precision of 4 decimal places.</p>
        <p>As usual, we begin by pairing the digits as shown. Then, we determine the first digit of the square root. 
        The integer part of the  square root of 19 =  4.
        Hence, this becomes the</p>
        <p>first digit of the square root.  The divisor is twice this digit, i.e., (2 x 4 =   8). 
        The first stage remainder is 19 - 42 = 3. 
        The first stage partial dividend is obtained by suffixing the next digit of the number "4" with the remainder "3". 
        Thus, the partial dividend is 34. 
        The process of finding the rest of the  digits of the square root is similar to that of straight division.
        </p>
        <p class='img-wrapper'><img src={mish7}/></p>
        <p class='center-para'>P.D = 34.</p>
        <p class='center-para'>34 = 8 x 4 + 2   Hence, quotient = 4, remainder = 2</p>
        <p>In each stage, the partial dividend is obtained by subtracting the dwandwa 
        of the square root obtained till then (except the first digit)  from the "suffixed number".</p>
        <p class='img-wrapper'><img src={mish6}/></p>
        <p class='center-para'>New P.D  =  27 - D(4) = 27 -16 = 11</p>
        <p class='img-wrapper'><img src={mish5}/></p>
        <p class='center-para'>11 = 8 x 1 +  3  Hence quotient = 1 , remainder = 3
        <br/>New P.D  =  30 - D(41) =  22</p>
        <p class='img-wrapper'><img src={mish4}/></p>
        <p class='center-para'>22 =  8 x 2 + 6   Hence, quotient = 2 , remainder = 6
        <br/>New P.D  =  60 - D (412)= 60 -17 = 43     </p>
        <p class='img-wrapper'><img src={mish3}/></p>
        <p class='center-para'>43  =  8 x 5 + 3  Hence, quotient = 5, remainder = 3
        <br/>New P.D = 30 -  D ( 4125) =  -14</p>
        <p>Here, the partial dividend has become negative. We need to correct the previous digit of the
        square root so that the partial dividend becomes positive. Hence, we reduce the previous digit of the square root  ("5") by 1.
        Hence, the remainder of the previous stage increases by "8" i.e., new remainder  = 3 + 8 = 11. 
        The partial dividend becomes 110 - D ( 4124) = 74.</p>
        <p class='img-wrapper'><img src={corr3}/></p>
        <p class='center-para'>New P.D = 110 - D ( 4124) = 74</p>
        <p class='img-wrapper'><img src={corr2}/></p>
        <p class='center-para'>74 =  8 x 9  + 2  Hence quotient = 9, remainder = 2
        <br/>New P.D =  20 - D( 41249) = -64</p>
        <p>Here again, the partial dividend is negative.Hence, to make it positive, we subtract "1" from the previous digit of the square root.   
        This increases  the previous remainder by "8".</p>
        <p class='img-wrapper'><img src={corr1}/></p>
        <p class='center-para'>New P.D = 100 - D(41248) =  24</p>
        <p>This partial dividend "24" is positive. We've also obtained 4 digits of the square root after the decimal place (44.1248). 
        Thus we've attained the required precision and hence, stop with this result.</p>
        <p>This example shows  that as in straight division, corrections can occur here  too. Is there a technique to reduce the number of corrections in this process? The answer is yes. The technique is the use of mishrank.
            Go on to the section on mishrank to see how the above problem becomes simpler on using mishrank.</p>
        <button style={{'margin-left':'35%'}} className="back" onClick={()=>navigate(-1)}>Back to where you left</button><br/>
      </div>

    </div>
  )
}

export default Urdh_sq_ex
