import React from 'react'
import '../division/nik_div.css'
import egstep1 from '../../images/sq_root_mexample_egstep1 (1).gif'
import egstep2 from '../../images/sq_root_mexample_egstep2 (1).gif'
import egstep3 from '../../images/sq_root_mexample_egstep3 (1).gif'
import egstep4 from '../../images/sq_root_mexample_egstep4 (1).gif'
import egstep5 from '../../images/sq_root_mexample_egstep5 (1).gif'
import egstep6 from '../../images/sq_root_mexample_egstep6 (1).gif'
import egmish3 from '../../images/sq_root_mexample_egmish3 (1).gif'
import egmish4 from '../../images/sq_root_mexample_egmish4 (1).gif'
import egmish5 from '../../images/sq_root_mexample_egmish5 (1).gif'
import eg3 from '../../images/sq_root_mexample_eg3 (1).gif'
import eg4 from '../../images/sq_root_mexample_eg4 (1).gif'
const More_example = () => {
  return (
    <div class='body'>
        <h3 style={title}>SQUARE ROOT TECHNIQUES-MORE EXAMPLES</h3>
        <hr/>
        <p>After going through the Urdhva Tiryaka method of determining square root, you'll  now be able to compute the square root of any number.
        To gain greater speed in calculation, more practice is required. Here are some examples intended to make you feel at ease with the method. 
        These will give you more familiarity with the method. Since the method has been already discussed, most of the examples shown are just the 'final stage' working sheets.
        You should have no problem in comprehending them.</p>
        <h4>1)Find the square root of 622521 (622521.00)</h4>
        
        <table className='ex_table'>
            <tr>
                <td><h4>STEP 1 :</h4></td>
                <td>
                <img src={egstep1}/>
                </td>
                <td>
                    62 - 72<sup>2</sup> = 13 
                </td>
            </tr>
            <tr>
                <td><h4>STEP 2 :</h4></td>
                <td>
                    <img src={egstep2}/>
                </td>
                <td>
                    P.D = 132 = 14 x 9 + 6
                </td>
            </tr>
            <tr class='centre'>65 - D(9) =  -16</tr>
            <tr>
                <td><h4>STEP 3 :</h4></td>
                <td>
                    <img src={egstep3}/>
                </td>
                <td>
                6 + 14 = 20;  9 - 1 = 8
                </td>
            </tr>
            <tr class='centre'>P.D = 205 - D(8)   = 141<br/>141 = 14 x 9 + 15</tr>
            <tr>
                <td><h4>STEP 4 :</h4></td>
                <td>
                    <img src={egstep4}/>
                </td>
                <td>
                P.D = 152 - D(89)  = 8
                </td>
            </tr>
            <tr>
                <td><h4>STEP 5 :</h4></td>
                <td>
                    <img src={egstep5}/>
                </td>
                <td>
                P.D = 81 - D(890) = 0
                </td>
            </tr>
            <tr class='centre'>0 = 14 x 0 + 0<br/></tr>
            <tr>
                <td><h4>STEP 6 :</h4></td>
                <td>
                    <img src={egstep6}/>
                </td>
                <td>
                Finally we got the answer!
                <br/>Therefore, the answer is "789.00"
                </td>
            </tr>
        </table>
        <h4>2) Solve the above problem using mishrank.</h4>
        <table className='ex_table'>
            <tr>
                <td><h4>STEP 1 :</h4></td>
                <td>
                <img src={egstep1}/>
                </td>
                <td>
                    62 - 72<sup>2</sup> = 13
                </td>
            </tr>
            <tr>
                <td><h4>STEP 2 :</h4></td>
                <td>
                    <img src={egstep2}/>
                </td>
                <td>
                P.D = 132 = 14 x 9 + 6
                </td>
            </tr>
        
            <tr class='centre'>65 - D(9) =  -16</tr>
            <tr>
                <td><h4>STEP 3 :</h4></td>
                <td>
                    <img src={egmish3}/>
                </td>
                <td>
                -16 = 14 x -1 + -2
                </td>
            </tr>
            <tr><p class='centre'>P.D = <span class='complement'>2</span>2 - D( 9<span class='complement'>1</span>0 )  = 18 - 18 = 0</p></tr>
            <tr>
                <td><h4>STEP 4 :</h4></td>
                <td>
                    <img src={egmish4}/>
                </td>
                <td>
                P.D = 1 - D(9<span class='complement'>1</span>0) = 0
                </td>
            </tr>
            <tr>
                <td><h4>STEP 5 :</h4></td>
                <td>
                    <img src={egmish5}/>
                </td>
                <td>
                And finally!<br/>Therefore, the answer is 7 9 <span class='complement'>1</span>= "789.00"
                </td>
            </tr>
        </table>
        <h4>3)  Find the square root of  9736.00 correct to 3 decimal places.</h4>
        <p>The  final worksheet is</p>
        <p class='img-wrapper'><img src={eg3}/></p>
        <p>Thus, the square root is 99.<span class='complement'>4</span>712 = "98.671"</p>
        <h4>4)  Find the square root of  615 correct to 3 decimal places.</h4>
        <p class='img-wrapper'><img src={eg4}/></p>
        <p>Thus, the  answer is 24.8<span class='complement'>1</span>96 = "24.799"</p>
        <hr/><br/>
    </div>

  )
}

export default More_example

const title={
    marginLeft:'40%'
  }
  