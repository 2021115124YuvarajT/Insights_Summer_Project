import React from 'react'
import './nik_div.css'
import { useNavigate } from 'react-router-dom'
import Sidenavbar from '../Sidenavbar/Sidenavbar'
import ex_401 from'../../images/is_there_a_way_out_exam401.gif'
import img_27 from'../../images/is_there_a_way_image27.gif'
import img_29 from'../../images/is_there_a_way_image29.gif'
import img_32 from'../../images/is_there_a_way_image32.gif'
import img_49 from'../../images/is_there a way_image49.gif'
import img_50 from'../../images/is_there_way_image50.gif'

const There_a_way_out = () => {
  const navigate=useNavigate();
  return (
    <div>
        <Sidenavbar/>
      <div class='body'>
      <h3 style={title}>USE OF MISHRANK</h3>
      <hr/>
        <p>While dealing with the Place Value System, we discussed a concept called 'Mishrank' or signed digit notation. 
            There, it was pointed that, the method will be useful in division.
            We'll discuss the importance of 'Mishrank' with respect to division. Consider the example which we saw previously. 
            The dividend was 759217 and the divisor was 589. In straight division without 'Mishrank', the calculation was very tedious. 
            One may even start doubting about the effectiveness of  that method. Let's redo the process using Mishrank.</p>
        
        <p>It's here that the use of 'Mishrank' comes into the picture. The partial dividend is -4, and the divisor is 5. 
            Now we can choose either 0 or -1 as quotient. For the sake of simplicity, we choose -1 as the quotient, so that we obtain a positive remainder. 
            It is not necessary that the remainder should be positive. 
            We may even choose 0 as the quotient and -4 as the remainder. Thus the quotient is -1 and the remainder is 1.</p>
        <p class='img-wrapper'><img src={img_27}/></p>
        <p class='r-center-para'>P.D = 29 - (8 x 3  + 9 x 1) = 29 - 33 =  -4 <br/>-4 = -1 x 5 +  1 </p>
        <p>In the next step, we again get a negative partial dividend. This is tackled by the use of Mishrank.</p>
        <p class='img-wrapper'><img src={img_29}/></p>
        <p class='img-wrapper'><img src={img_32}/></p>
        <p class='r-center-para'>-5 = -2 x 5 + 3 </p>
        <p>The next step is:</p>
        <p class='img-wrapper'><img src={img_49}/></p>
        <p class='img-wrapper'><img src={img_50}/></p>
        <p>Finally, we obtain a partial dividend of 56. Now we can either stop and obtain the remainder or continue to get the result in decimal places. Let's find the remainder. 
            To get the remainder, assume that the next quotient digit as 0. Find the cross product of  last two digits of the dividend and the quotient. This yields -18. 
            Prefix the partial dividend 56 to the last digit '7' to get 567. Subtract -18 from 567 to get the final remainder 585. 
            The quotient is 1288.
        </p>
        <p>Compare this with what we did earlier without Mishrank. There the process was very tedious with several corrections. But now, with the use of Mishrank, we finished the process in fewer steps.</p>
        <hr/>
        <h3 class='main_heading'>Some more examples to show the use of Mishrank</h3>
        <p class='img-wrapper'><img src={ex_401}/></p>
        <p>See the above example, where we divide 75964 by 78. At the second step, the partial dividend was -3. 
          In the previous problem, we took the quotient in such a way that the remainder is always positive.
          It was also mentioned that it need not be always be positive. Now we're taking 0 as the quotient and -3 as the remainder.
          What is the advantage?. In many cases, it will be better if the absoloute value of the remainder is minimum.
          So we take -3 as the remainder, rather than taking 4 as the remainder.
        </p>
        <p>Also, we said that, with Mishrank, we need not go back and make a correction. 
          Then why did we go back in the last step? In the last step, we've to find the final remainder. 
          The final remainder obtained can't be negative. 
          Hence we've to go back to obtain a positive final remainder.
        </p>
        <br/>
        <button style={{'margin-left':'40%'}}onClick ={()=>navigate(-1)}>BACK TO WHERE YOU LEFT</button>
        <br/>
        <hr/>
      </div>
    </div>
  )
}

export default There_a_way_out

const title={
  marginLeft:'40%'
}
