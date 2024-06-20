import React from 'react'
import '../division/nik_div.css'
import { NavLink,useNavigate } from 'react-router-dom'
import step1 from '../../images/sq_root_urdhv_step1 (1).gif'
import step2 from '../../images/sq_root_urdhv_step2 (1).gif'
import step3 from '../../images/sq_root_urdhv_step3 (1).gif'
import step4 from '../../images/sq_root_urdhv_step4 (1).gif'
import step5 from '../../images/sq_root_urdhv_step5 (1).gif'
import step6 from '../../images/sq_root_urdhv_step6 (1).gif'
import step7 from '../../images/sq_root_urdhv_step7 (1).gif'
import step8 from '../../images/sq_root_urdhv_step8 (1).gif'
import step9 from '../../images/sq_root_urdhv_step9 (1).gif'
const Urdh_sq = () => {
    const navigate=useNavigate();
  return (
    <div class='body'>
        <h3 style={title}>URDHA TIRYANKA METHOD-SQUARE ROOT TECHNIQUE</h3>
        <hr/>
        <p>The method for finding the square root of a number is similar to that of straight division.
            We'll start with the method by explaining it through an example. 
            We'll find the square root of 552049 i.e., 552049.00.
        </p>
        <p>We begin by pairing the digits of the given number from the rightmost digit.</p>
        <p class='img-wrapper'><img src={step1}/></p>
        <p>Then, we find the integer part of the square root of "55" which is the leftmost pair.
        This square root is "7". This "7" forms the first digit of the square root of the given 
        number and hence we place it  in the bottom row as follows :
        </p>
        <p class='img-wrapper'><img src={step2}/></p>
        <p>Now, we double the first digit ("7") 
        of the square root and place it in the divisor's position ("divisor's position" - as in straight division").</p>
        <p class='img-wrapper'><img src={step3}/></p>
        <p>After this, we write the difference between the "square of 7" and "55" as the remainder.</p>
        <p class='center-para'>55 - 49 = 6 ( hence, remainder  =  6 )</p>
        <p class='img-wrapper'><img src={step4}/></p>
        <p>From now on, the process is similar to straight division with "14" as the divisor.
        So, the partial dividend (P.D) is obtained by suffixing the next digit of the number to the remainder "6".
        Hence the partial dividend is "62".</p>

        <p class='img-wrapper'><img src={step5}/></p>
        <p>We divide the partial dividend "62" by the divisor 14 to obtain "4" as the quotient and "6" as the remainder. 
            We place the quotient ("4") in the bottom row (as the next digit of the square root) and the remainder ("6")
            immediately below the given number.</p>
        <p class='img-wrapper'><img src={step6}/></p>
        <h4>From this stage onwards, to find the partial dividend at every stage, we proceed as follows :</h4>
        <ol>
            <li> We suffix the next digit to the remainder. Let us call the number obtained after this suffixing as "suffixed number".
                Hence, in our example, the "suffixed number" is "0" suffixed with "6" i.e., "60".</li>
            <li>
            Then we subtract the dwandwa ( D(x) ) of the square root obtained till now,(leaving off the first digit alone) from the "suffixed number".
            This gives us the partial dividend (P.D) for the next stage.
            </li>
        </ol>
        <p class='center-para'>Hence, P.D =  60 - D(4) = 60 - 42 =  44</p>
        <p>This partial dividend ("44") is divided as usual, 
        by "14" to obtain "3" as the quaotient and "2" as the remainder.
        This is shown in the figure :
        </p>
        <p class='img-wrapper'><img src={step7}/></p>
        <p>Again, to find the partial dividend for the next stage, we follow the same procedure described above i.e.,</p>
        <p class='center-para'>"suffixed number" = "24"</p>
        <p class='center-para'>P.D = 24 - D (43) = 24 - 24 = 0</p>
        <p>When this P.D ("0") is divided by "14", the quotient is "0" and the remainder is "0". 
        Remember that to find the P.D, we subtract the dwandwa of the square root obtained till then LEAVING OFF THE FIRST DIGIT. 
        Hence, our figure</p>
        <p class='img-wrapper'><img src={step8}/></p>
        <p>The partial dividend for next stage is 09 - D (430) = 09 - 9 =  0. Our figure becomes :</p>
        <p class='img-wrapper'><img src={step9}/></p>
        <p>After this, all our partial dividends and the square root digits will be "0" .</p>
        <p>Since our number has 6 digits, the square root has 3 digits. 
        The square root is obtained from the digits of the bottom row. 
        Hence the square root in our example is "743.00"</p>
        <p>Now that a simple example has been dealt with, we shall go for a slightly difficult one.</p>
        <NavLink style={{textAlign: 'left',color: 'black'}} to = "/squar_root/urdh_sq_ex">Click HERE for another example</NavLink>
        <br/>
        <hr/>
    </div>
  )
}

export default Urdh_sq

const title={
    marginLeft:'40%'
  }