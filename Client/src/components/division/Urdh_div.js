import React from 'react'
import './nik_div.css'
import { NavLink } from 'react-router-dom'
import step_1 from '../../images/step01_div_urdhva.gif'
import step_2 from '../../images/step02_div_urdhva.gif'
import step_3 from '../../images/step03_div_urdhva.gif'
import step_4 from '../../images/step04_div_urdhva.gif'
import step_5 from '../../images/step05_div_urdhva.gif'
import step_6 from '../../images/step06_div_urdhva.gif'
import step_7 from '../../images/step07_div_urdhva.gif'

const Urdh_div = () => {
  return (
    <div class='body'>
      <h3 style={title}>URDHVATIRYAKA (STRAIGHT DIVISION TECHNIQUE)</h3>
      <hr/>
      <p>We've already seen the 'Nikhilam' method for dividing two numbers. That method satisfies one of the criteria  of the Indian methods, namely mental calculation. 
        But the drawback is that, it is not general. That method was best suited only when the divisor was large. We now present you a method of division, which is general, fast and also can be done mentally.
        This method is called Urdhva Tiryaka or Straight Division. Let's illustrate this with an example.</p>
      <h4>Consider the division of  47971 by 84:</h4>
      <p>Write the dividend and divisor using the following rules:        
        Write  the units digit of the divisor (4) to the left of dividend. We write the tens digit of the divisor (8) to the bottom of 4.
        The entire process of division will only involve the tens digit of the divisor, namely 8.
      </p>
      <p class='img-wrapper'><img src={step_1}/></p>
      <p>We then start finding  the quotient digits from left to right .  This is done by dividing 47 by 8 and writing the quotient and the remainder. 
        Let's represent the quotient by Q and the remainder by R. Q gives the tens digit of the quotient.</p>
      <p></p>
      <p class='img-wrapper'><img src={step_2}/></p>
      <p>We then prefix the remainder 7 of the previous step to the next digit of the dividend, i.e. 9, to get the partial dividend as 79 (which is nothing but multiplying 7 by 10 and adding 9).
         From this we further subtract the product of the previous quotient digit and the first digit of the divisor, (5 x 4), to get 59 as the partial dividend. Divide this 59 by 8 to get 7 as the quotient and 3 as the remainder.</p>
      <p class='img-wrapper'><img src={step_3}/></p>
      <p>Now our new partial dividend is 37 - 4 x 7 which is 9. Dividing 9 by 8 yields a quotient of 1 and a remainder of 1.</p>
      <p class='img-wrapper'><img src={step_4}/></p>
      <p>Our next partial dividend is (11 - 4),  which is 7. But the last digit of the dividend corresponds to the remainder. Hence the remainder is 7</p>
      <p class='img-wrapper'><img src= {step_5}/></p>
      <p>Thus the quotient is 571 and the remainder is 7.</p>
      <p>Suppose you  want to get the   quotient  as a decimal number, we proceed as follows. Add zeroes to the dividend depending on the precision (number of decimal places) you want.<br/> 
        Then perform the steps  as usual.  In the above example, if you want a precision of 2 digits after the decimal point, append a zero to the end, to make the dividend as 479710. <br/>
        Instead of taking 7 as the remainder, take it as the partial dividend, and repeat the steps. The next two steps are,
      </p>
      <br/>
      <p class='img-wrapper'><img src={step_7}/></p>
      <p>followed by:</p>
      <p class='img-wrapper'><img src={step_6}/></p>
      <p>Hence, the final value is 571.08. This can be extended to any no. of decimal places by adding zeroes to the dividend.
      <NavLink style={{textAlign: 'left',color: 'black'}} to = "/division/urdh_ex">Let's see a few more  examples.</NavLink> </p>
      <p>Thus, the process involves only multiplication, addition and division by a single digit divisor.
        At any stage we compute the partial dividend by prefixing the previous remainder to the next digit of the dividend and subtract a value from it.
        <NavLink style={{textAlign: 'left',color: 'black'}} to = "/division/part_div_neg">What to do if the partial dividend becomes negative?</NavLink>
      </p>
      <br/>
  </div>
  )
}

export default Urdh_div

const title={
  marginLeft:'40%'
}