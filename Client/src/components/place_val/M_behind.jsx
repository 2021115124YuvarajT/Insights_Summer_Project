import React from "react";
import '../division/nik_div.css'
export default function M_behind(){
    return(
        <div className="body">
            <h2 class='main_heading'>NOTE</h2>
            <hr/>
            <p>The above exercise was just to introduce the place value system of numbers. In our day-to-day representation of numbers, we follow the place value system (PVS). In PVS, base is defined as the no. of symbols used for the representation. For instance, the base is 3 in the above example. We represent numbers greater than or equal to the base as a sum of consecutive powers of the base.</p>
            <p>Let us see for example, the PVS used in decimal numbers. Here there are ten symbols (0-9). Hence the base is 10. Consider the number 548. It is actually 8 x 1 + 4 x 10 + 5 x 100. Are you able to relate this to the units, tens and hundreds place which you studied in your lower classes? Instead of 10 symbols, if we had 3 symbols only, we go back to the above example. Instead of  '@' ,'#' and '$', let us use the digits 0-2. Then, the representation of fourteen would be 112 ( 2 x 1 + 1 x 3 + 1 x 9 ). Try it out similarly for eighty one.</p>
            <h3 style={{'text-decoration':'none'}}>PVS representation :</h3>
            <p>( an  an-1  an-2  ...  a1  a0 ) =  a0b0 +  a1b1  +  a2b2 +  ...  +  an-1bn-1 + anbn</p>
            <p>where 'ai ' is a digit ( which can vary from 0 to b-1) in the representation and 'b' is the base. This definition of PVS can also be extended with decimal points.</p>
            <p style={{'color':'darkblue'}}> i.e.,  612.34 ( base 12)  =  6 x 144   +   1 x 12    +    2 x 1    +    3 x (1/12)    +    4 x (1/144)</p>
            <p>Now, you may wonder why all this is being dealt with in a course of Indian Mathematics. The answer is that, all the shortcuts and various arithmetic methods of Indian Mathematics are based on the PVS of numbers. These methods are independent of the base used and hence can be extended to any base.</p>
        </div>
    )
}