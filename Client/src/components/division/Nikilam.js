import React from 'react'
import './nik_div.css'
import { NavLink } from 'react-router-dom'
import exo_1 from '../../images/exo_div_nik_1.gif'

const Nikilam = () => {
  return (
    <div className="body">
          <h3 style={title}>NIKILAM-DIVISION TECHNIQUE</h3>
          <hr/>
          <p>A careful observation of the problem, 52 ÷ 9 would reveal the following:-</p>

          <p>
          A) The quotient is 5, same as the tens digit of the dividend.
          <br/>
          B) The remainder is 7, the sum of the tens digit and units digit.
          </p>
          <p>Does this hold true for all 2-digit numbers divided by 9 ?<br/>Consider 34 ÷ 9.</p>
        
        <ol>
          <li>The quotient is 3 itself</li>
          <li>The remainder is 3 + 4 = 7</li>
        </ol>
        <p>A host of other examples affirm that this technique indeed works.</p>
        <h3>Note📝 - A Slight Refinement:</h3>
        <p>Now Consider 49 ÷ 9.</p>
        <ol>
          <li>Quotient = 4</li>
          <li>Remainder = (4 + 9) = 13</li>
        </ol>
        <p>Which is absurd, as the remainder can never exceed the divisor.
           This can be set right in the following fashion. Divide 13 again by 9 ( Using the same technique )</p>
        <ol>
          <li>Quotient = 1</li>
          <li>Remainder = (1 + 3) = 4</li>
        </ol>
        <p>Add this Quotient with 4 to get 5 as the answer. The Remainder is 4.</p>
        <h3>The above technique can be summarised as follows:</h3>
        <ol>
          <li>For a Two digit number to be divided by 9, copy the tens digit as the quotient (Q) and the sum of the tens and units digit as the remainder(R).</li>
          <li>If this R > 9, Again carry out the division process to obtain a quotient S and a remainder T.</li>
          <li>The result is Quotient=Q+S and remainder is T.</li>
        </ol>
        <h3>An Example:</h3>
        <p>77 ÷ 9 :</p>
        <p class='img-wrapper'><img src = {exo_1}/></p>
       
        <h3>Think about this❗</h3>
        <p> &#9755;	<NavLink style={{textAlign: 'left',color: 'black'}} to = "/division/3_digit_num">How do we divide 3 digit numbers ? </NavLink></p>
        <p> &#9755;<NavLink style={{textAlign: 'left',color: 'black'}} to = "/division/div_not_9">How do we divide when divisor other than 9 ?</NavLink></p>
        <br/>
  </div>
  )
}

export default Nikilam

const title={
  marginLeft:'40%'
}
