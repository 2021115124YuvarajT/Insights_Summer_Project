import React from 'react';
import "../division/nik_div.css"
function Divs_intro() {
  return (
    <div className='body '>
      <h2 style={title}>Divisibility Check</h2>
      <hr/>
      <p>
        How can 11 apples be divided equally among 4 people without cutting the apples?
      </p>
      <p>
        A quick inspection will reveal that this cannot be done. This is because 11 leaves a remainder of three when divided by 4. 11 is not divisible by 4.
      </p>
      <p>
        A general class of such problems leads to an interesting branch of mathematics dealing with divisibility. Divisibility can be determined through conventional techniques, only through actual cumbersome division. Shortcuts do exist, but they are only for a few numbers like 2, 3, 5, 9, and 11. Vedic techniques, on the other hand, provide us with a wealth of shortcuts to determine divisibility of any number by any other number. These techniques can be applied mentally with great speed.
      </p>
      <h3>Simple Techniques</h3>
      <p>
        Vedic techniques talk about Veshtanas or Osculators which are to be used to determine divisibility. These Veshtanas can be thought about as a "seed" using which divisibility can be determined. One member of this group of Osculators is the Ekadhika which literally translates to "One more".
      </p>
      <h4>General Illustration</h4>
      <p>
        Determine if 84 is divisible by 7. To do this, first determine the Ekadhika of 7. Square 7 to get 49. The number "One more" than 4 is 5. So the Ekadhika of 7 is 5.
      </p>
      <h5>The procedure is:</h5>
      <ol>
        <li>Multiply the units digit of 84 by 5: 4 x 5 = 20</li>
        <li>Add the tens digit of 84 to the result: 8 + 20 = 28</li>
        <li>The resulting number 28 is divisible by 7. Hence 84 is divisible by 7.</li>
      </ol>
      <p>What about numbers with three or more digits ? The procedure is simply extended</p>
      <h4>Example: Determine if 112 is divisible by 7</h4>
      <p>
        To determine if 112 is divisible by 7 using the Ekadhika technique:
      </p>
      <ol>
        <li>Multiply the units digit of 112 by 5: 2 x 5 = 10</li>
        <li>Add the tens digit of 112 to the result: 1 + 10 = 11</li>
        <li>Now multiply 11 by 5: 11 x 5 = 55</li>
        <li>Add the hundreds digit of 112 to 55: 1 + 55 = 56</li>
        <li>Now 56 is divisible by 7. Hence, 112 is divisible by 7.</li>
      </ol>
    </div>
  );

}
const Backgroun ={
    backgroundColor:'#F8CF50',
    marginLeft:'300px',
    listStyleType:'square'

}
const toptop = {
    fontSize:'x-large',
    
}

const title={
  marginLeft:'40%'
}


export default Divs_intro;

