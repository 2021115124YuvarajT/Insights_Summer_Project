import React from 'react'
import './nik_div.css'
import { NavLink ,useNavigate} from 'react-router-dom'
import Sidenavbar from '../Sidenavbar/Sidenavbar'
import ex_201 from '../../images/part_div_neg_ex201.gif'
import ex_202 from '../../images/part_div_neg_ex202.gif'
import ex_203 from '../../images/part_div_neg_ex203.gif'
import ex_204 from '../../images/part_div_neg_ex204.gif'
import ex_205 from '../../images/part_div_neg_ex205.gif'
import ex_206 from '../../images/part_div_neg_ex206.gif'
import example_201 from '../../images/part_div_neg_example201.gif'
import example_202 from '../../images/part_div_neg_example202.gif'


const Part_div_neg = () => {
  const navigate=useNavigate();
  return (
    <div>
    <div className="body">
    <h2 class='main_heading'>WHEN PARTIAL DIVIDEND IS NEGATIVE</h2>
    <hr/>
    <p>Can the partial dividend become negative? Why not?
    At any stage the partial dividend is obtained by prefixing the previous remainder to the next digit, and subtracting a product from that. 
    Hence if that product is large, you can get a negative partial dividend.
    What do we do in such a situation? With a little common sense, we can find the reason for a negative partial dividend. 
    The reason is that, our previous 'guess' of the quotient digit is more than the digit that should be actually present at that position.  
    Thus we've to reduce the guess. First we subtract 1 from our previous guess, and see if the next partial dividend is negative. 
    If it is so, we repeat the process till we get a positive value for the partial dividend. 
    Enough of theory. Let's face it in a problem.
    </p>
    <p>Consider dividing  50443  by 73</p>
    <p class='img-wrapper'><img src={ex_201}/></p>
    <p>In the next step we prefix 1 to 4 and subtract 21 from it to obtain the partial dividend.</p>
    <p class='img-wrapper'><img src={ex_202}/></p>
    <p>Now comes the problem. Our partial dividend is -7. So we go back to the previous step.
    In that step, the partial dividend was 50. 
    We had 7 as the quotient. Decrease the quotient by 1. By doing this, the remainder is increased to 8. 
    This increases the next partial dividend.
    </p>
    <p class='img-wrapper'><img src={ex_203}/></p>
    <p>We can now proceed further without any hitch. The next two steps are</p>
    <p class='img-wrapper'><img src={ex_204}/></p>
    <p>and</p>
    <p class='img-wrapper'><img src={ex_205}/></p>
    <p>Since we've obtained 3 digits as the quotient, the next partial dividend is nothing but the remainder.</p>
    <p class='img-wrapper'><img src={ex_206}/></p>
    <p>Thus the quotient is 691 and the remainder is 0.</p>
    <hr/>
    <h3>see another example:</h3>
    <p>Have a look  at yet another  example, where the partial dividend becomes negative</p>
    <p>Divide 493372 by 96</p>
    <p class='img-wrapper'><img src={example_201}/></p>
    <p>At this stage, the partial dividend becomes negative. So we make a correction and proceed further.</p>
    <p class='img-wrapper'><img src={example_202}/></p>
    <p>Finally the quotient is 5139 and the remainder is 28.</p>
    <hr/>
    <p>We see that by going back one step we are in fact correcting the previous value of the partial dividend. 
    How much is this correction that is applied, when we 'go back'? 
    Let d1 be the first digit of the divisor (the one with which we actually divide, in the Straight Division method) and d2 be the second digit of the divisor. 
    </p>
    <p>Let 'q' be the quotient digit, which is reduced on going back.Decreasing 'q' by 1 results in an increase in the remainder 'r' by 'd1'.
    We prefix this new remainder (r + d1) to the next digit , and subtract the product of d2 and the new value of q. 
    This new q is 1 less than the old q.</p> 
    <p>Thus the effective increase in partial dividend is 10 x d1 + 1 xd2</p>
    <p>Can't this method be applied to divisors of more than 2 digits? 
    How many steps do we have to go back to correct the partial dividend?<NavLink style={{textAlign: 'left',color: 'black'}} to = "/division/answer_to_ques_part_div_neg">Want to know the answers to these questions?</NavLink></p>
    <br/>
    <button style={{'margin-left':'35%'}}onClick ={()=>navigate(-1)}>BACK to URDHVA TIRYAKA </button>
    <br/>
    </div>
    </div>
  )
}

export default Part_div_neg
