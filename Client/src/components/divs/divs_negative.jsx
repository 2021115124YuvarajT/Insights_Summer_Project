import "../division/nik_div.css"
export default function Divs_negative(){
    return(
        <div className="body">
            <h3 style={title}>The Principle of Negative Osculation</h3>
            <hr/>
            <p>Just as Ekadhika is used for testing for divisibility, a negative osculator can be used in place of Ekadhika, to test for divisibility when the Ekadhika becomes huge. To avoid confusion, This "Negative" Ekadhika can be denoted by   Q.</p>
            <h3>The Rules are:-</h3>
            <ol>
                <li>For Numbers ending with 1:- Simply Drop the 1 in the Units place.</li>
                <li>For Other Numbers:- Multiply with appropriate numbers to get a 1 in the units digit and then follow the above rule. That is:-</li>
                <ol>
                    <li>For Numbers Ending with 7:- Multiply with 3, Drop the 1 in the Units place. (eg ) Q of 17 is :- 17 x 3 = 51, dropping 1 we get 5.</li>
                    <li>For Numbers Ending with 3:- Multiply with 7, Drop the 1 in the Units place</li>
                    <li>For Numbers Ending with 9:- Multiply with 9, Drop the 1 in the Units digit. (eg) Q of 19 is :- 19 x 9 = 171. Dropping the 1 in Units place, we get 17.</li>
                </ol>
            </ol>
            <p>A very interesting feature is that, P and Q add up to the divisor. (eg) P of 19 is 2, Q of 19 is 17. 2 + 17 = 19. This feature can be used to determine P from Q or vice versa.</p>
            <p>Another feature is that ,if last digit of a number is 3, it is p less than q .If it is 7,q is less than p.</p>
            <p>While using the Negative Osculator Q, the procedure is altered. Instead of taking the Dividend as such, it is alternately marked as positive and negative. That is, unit place is marked as positive, tens as negative, hundreds as positive thousands as negative... and so on.</p>
            <h3>Example:- Is 11234 divisible by 41 ?</h3>
            <p>The Negative Osculator for 41 is 4, obtained after dropping the 1. 11234 is not taken as such. Instead, it is interpreted as +1 -1 +2 -3 +4 . Units place is positive and then the sign alternates</p>
            <h3>The rest of the procedure is same.</h3>
            <ol>
                <li>Multiply Units place of 11234 by 4:---------- 4 x 4 = 16</li>
                <li> Add -3 to 16:--------------------------------16 + -3 = 13</li>
                <li>Multiply 13 with 4:---------------------------13 x 4 = 52 ( 52 can be simplified as 11 )</li>
                <li>Add 2 to 11 to get 13.</li>
                <li>Multiply 10 and 4 to get 40, add 1 to get 41.</li>   
            </ol>
            <p>41 is divisible by 41. Hence 11234 is divisible by 41.</p>
            <p>Although we have solved the problem of geting struck up with huge Ekadhikas by introducing the concept of negative Ekadhika, cases where huge divisors are present still pose a problem. They still yield huge positive as well as negative Ekadhikas.</p>
            <p>How can these numbers be tackled?</p>
            <p style={look}>Please look into next heading</p> 
        </div>
    )

}
const topcontainer={
    marginLeft:'220px',
    fontSize:'x-large'
}
const title={
    textAlign:'center',
    marginLeft:'40%'
}
const look={
    color:'blue'
}

