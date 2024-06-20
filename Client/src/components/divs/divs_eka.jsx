import "../division/nik_div.css"
export default function Div_eka(){
    return(
        <div className="body">
            <h3 style={title}>Rules For Determining Ekadhikas</h3>
            <hr/>
            <p>Given below are the rules to determine the Ekadhikas of various numbers. For convenience Ekadhikas can be denoted by "P"</p>
            <ol>
                <li>For numbers ending with 9 :- 9, 19, 29... The Ekadhika is determined by adding 1 to the numbers and then dividing by 10. (eg) P of 29 is 29+1=30. 30 / 10 = 3.</li>
                <li>For numbers ending with 3:- 3, 13, 23....Multiply by 3 to get numbers ending with 9. Then follow the above rule to get the Ekadhikas. P of 13 is:- 13 x 3= 39. 39+1=40. 40/10=4. P of 13 is 4</li>
                <li>For numbers ending with 7:- 7, 17, 27....Multiply by 7 to get numbers ending with 9. Then follow the first rule. (eg) Ekadhika of 17 is :- 17 x 7=119. 119+1=120. 120/10=12 . P of 17 is 12.</li>
                <li>For Numbers Ending with 1:-1, 11, 21....Multiply with 9 to get numbers ending with 9. Then follow the usual rule</li>
            </ol>
            <h3>Simplification:</h3>
            <p>Consider the problem:- Is 4379 divisible by 29 ?</p>
            <p>The Standard procedure would be:</p>
            <ol>
                <li>Determine the Ekadhika of 29:---------29+1=30. 30/10=3. P = 3</li>
                <li> Multiply the Units digit of 437 9 by 3:----9 x 3 = 27</li>
                <li>Add tens digit of 43 79 to 27:------------27+7 = 34</li>
                <p>At this stage the standard procedure would be to multiply 34 by 3 and add 3. How ever this results in a very cumbersome process. To avoid this, take the remainder of 34 when divided by 29 ( the original number ) to get 5. The procedure is carried out with 5 instead.</p>
                <li> Multiply 5 by 3 to obtain 15--------------5 x 3 = 15</li>
                <li> Add Hundreds Digit of 4 379 to 15-------15 + 3 = 18</li>
                <li> Multiply 18 by 3 to get 54----------------18 x 3 = 54</li>
                <li> Add Thousands digit of 4379 to 54--------4 + 54 = 58</li>
            </ol>
            <p>58 is divisible by 29. So 4379 is divisible by 29.</p>
            <p>The simplification method is:-</p>
            <p>At any point of time during the application of the procedure, 
            for determining the divisibility of a number N by a number M if the intermediate result becomes cumbesome, 
            the remainder of the result when divided by M can be used instead of the result itself.</p>
            <p>This technique is simple as long as the Ekadhikas are sufficiently small.</p>
        </div>
    )

}
const title={
    marginLeft:'40%'
  }