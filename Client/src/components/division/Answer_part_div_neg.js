import React from 'react'
import './nik_div.css'
import { NavLink ,useNavigate} from 'react-router-dom'
import Sidenavbar from '../Sidenavbar/Sidenavbar'

import img_34 from '../../images/ans_to_q_div_image34.gif'
import img_35 from '../../images/answer_to_q_div_image35.gif'
import img_38 from '../../images/answer_to_q_div_image38.gif'
import img_37 from '../../images/answer_to_q_div_image37.gif'
import img_39 from '../../images/ans_to_q_div_image39.gif'
import img_40 from '../../images/ans_to_q_div_image40.gif'
import img_41 from '../../images/ans_to_q_div_image41.gif'
import img_42 from '../../images/ans_to_q_image42.gif'
import img_44 from '../../images/ans_to_q_div_image44.gif'
import img_45 from '../../images/ans_to_q_div_image45.gif'
import img_46 from '../../images/ans_to_q_div_image46.gif'
const Answer_part_div_neg = () => {
    const navigate=useNavigate();
  return (
    <div>
        <Sidenavbar/>
        <div className="body">
        <h2 style={title}>NEGATIVE PARTIAL DIVIDEND-MULTIPLE DIGIT DIVISOR</h2>
        <hr/>
        <p>So far, we've applied the Urdhva Tiryaka method to only two digit divisors. 
            The question which naturally comes to one's mind is - "can't this method be applied to divisors with more than two digits ?". 
            The answer is - "yes, it most certainly can". Actually, it is possible to divide by a divisor with any number of digits. 
            Let's see the method for a three digit divisor. The problem of negative partial dividend will come here also. 
            It is taken care of in a similar way, as in the two digit divisor case. 
            The example which we will take is the division of 759217 by 589.
        </p>
        <p>Write the dividend and divisor as follows:</p>
        <p class='img-wrapper'><img src={img_46}/></p>
        <p>Divide 7 by 5 to get the remainder and the quotient</p>
        <p class='img-wrapper'><img src={img_34}/></p>
        
        <p>In the next step, the partial dividend is obtained by subtracting 8x1 from 25.</p>
        <p class='img-wrapper'><img src={img_35}/></p>
        <p>So far, there has been no change because of the presence of three digits. 
            The difference comes into picture when we calculate the next partial dividend. 
            In this step, we get 29 by prefixing 2 to 9. 
            From 29, we subtract ( 8 x 3 + 9 x 1). How do we get this value? 
            This is nothing but the cross product of 89 and 13.
        </p>
        <p class='img-wrapper'><img src={img_37}/></p>
        <p>The partial dividend has become negative. Hence we've to make the correction. So we go back to the previous step and recalculate the quotient digit.</p>
        <p class='img-wrapper'><img src={img_38}/></p>
        <p>We can now proceed in the usual way</p>
        <p class='img-wrapper'><img src={img_39}/></p>
        <p>Notice that, in the above step, the partial dividend was 54 and the divisor was 5. Hence we could have chosen 10 as the quotient. 
            But since we're calculating only a single digit of quotient, we should not take a quotient digit of more than 9.</p>
        <p class='img-wrapper'><img src={img_41}/></p>
        <p>Again, we encounter a negative partial dividend</p>
        <p class='img-wrapper'><img src={img_40}/></p>
        <p>So we go back and reduce the previous quotient digit 9 to 8</p>
        <p class='img-wrapper'><img src={img_44}/></p>
        <p>Our partial dividend will now increase</p>
        <p class='img-wrapper'><img src={img_45}/></p>
        <p>After the next step, there will be only one digit of the dividend.</p>
        <p class='img-wrapper'><img src={img_42}/></p>
        <p>There is now only one digit remaining in the dividend. Now we can calculate the remainder. The remainder is calculated as follows:</p>
        <p>Prefix the last P.D(7) to the last digit of the dividend to get 77. 
            For the purpose of calculating the remainder, take the next digit of the quotient to be 0. 
            Compute the cross product of the last two digits of the divisor and the last two digits of the quotient. 
            This gives 8 x 0 + 9 x 9 = 81. Subtract this from the last partial dividend to get -4. But this number is negative. 
            Hence subtract 1 from the quotient, and add the divisor to the remainder. Hence the quotient is 1288 and the remainder is 585.
            Again, if you want the quotient after the decimal point, continue as before without bothering to obtain  the raminder.
        </p>
        <p><NavLink style={{textAlign: 'left',color: 'black'}} to = "/division/few_ex">Have a look at a few examples</NavLink></p>
        <p>This process involved a lot of corrections. It doesn't seem to be much easier as promised before.
        <NavLink style={{textAlign: 'left',color: 'black'}} to = "/division/is_there_a_way_out">Is there a way out?</NavLink></p>
        <br/>
        <button style={{'margin-left':'25%'}}onClick ={()=>navigate(-1)}>BACK to URDHVA TIRYAKA WHEN PARTIAL DIVIDEND IS NEGATIVE</button>
        </div>
    </div>
  )
}

export default Answer_part_div_neg

const title={
    marginLeft:'40%'
  }
