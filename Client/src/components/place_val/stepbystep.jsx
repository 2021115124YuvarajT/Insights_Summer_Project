import React from "react"
import '../code/Code.css';

import Q41 from "../../images/solution4.png"
import Q2 from "../../images/solution2qn.gif"
import Q3 from "../../images/solutionq3.gif"
import { useNavigate } from "react-router-dom"
export default function Stepbystep() {
    const navigate = useNavigate();
    return (
    <div className="content-body">
        <h3 class='main_heading'>STEP BY STEP SOLUTION</h3>
        <hr/>
        <h4>Question 1:</h4>
            <p> What is the denary (base 10) equivalent of 125 to the base 25 ?</p>
            <div className="Answer"> 
            <p>Ans: (125)25= 3x1  +  1x25  +   1x169</p>
            <p>=185</p>
        </div>
        <div>
        <h4>Question 2:</h4>
            <h4>What is the decimal equivalent of <img style={{'margin-left':'0px'}} src={Q2}/>8 </h4>
            <div className="Answer">
                <p>Ans:  <img src={Q2}style={{'margin-left':'0px'}}/>8 =   6 x 82  + (-4 ) x 8  + 0 x 1  + (-5) x 8-1</p>
                <p> =   384 - 32 - 0.625

                </p>
                <p>=   351.375</p>
            </div>
        </div>
        <div>
        <h4>Question 3</h4>
            <h4>The decimal equivalent of (<img style={{'margin-left':'0px'}}src={Q3}/>)4  is 10. What  is 'a'?</h4>
            <div className="Answer">
                <p>Ans:  =  1 x 43  +  (-3) x 42 +  (-a) x  4  + 2   = 10</p>
                <p>{"=>"}18 - 4a = 10</p>
                <p> {"=>"}a =  2</p>
            </div>
        </div>
        <div>
        <h4>Question 4:</h4>
            <h4> Eliminate the negative digits in  </h4>
            <div>
                <p class='img-wrapper'><img src={Q41}/></p>
                <p></p>
            </div>
        </div>
        <button style={{'margin-left':'50%'}} onClick={()=>navigate(-1)}>Back</button>
    </div>
    )
}