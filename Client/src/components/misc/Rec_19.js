import React from 'react'

const Rec_19 = () => {
  return (
    <div class='body'>
    <h3 style={title}> THE METHOD OF RECIPROCAL </h3>
    <hr/>
    <p>The rightmost of the recurring digits is 1.Write 1 at the right most position. Initially, there is no carry.</p>
    
    <ol>
    <li>1/19 = ._ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 1<br/>
        <p>Multiply it with 2, which is 1 more than the penultimate digit of the given number and add the carry to get the partial sum.
            Write the partial sum as the next (from right) digit
        </p>
    </li>
        <li>1/19 = ._ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 2 1<br/>
        <p>Repeat this process by multiplying the last digit obtained, by 2. 
        Whenever the partial sum exceeds 10, divide the partial sum by 10. 
        The remainder gives the next digit, and the quotient is taken as the carry
        </p>
    </li>
    <h3>After 4 steps the result will be,</h3>
    <li>1/19 = ._ _ _ _ _ _ _ _ _ _ _ _ _ 6 8 4 2 1 (carry = 1)<br/>
        <p>So in the next step, multiply 6 by 2 to get 12 and add the carry 1 to get 13.</p>
    </li>
    <li>1/19 = ._ _ _ _ _ _ _ _ _ _ _ _ 3 6 8 4 2 1 (carry = 1)<br/>
        <p>Proceeding in a similar manner, after 18 steps the value is</p>
    </li>
    <li>1/19 = ._ 5 2 6 3 1 5 7 8 9 4 7 3 6 8 4 2 1 (carry = 0)<br/>
        <p>When the last digit 5 is multiplied by 2 and the carry 0 is added, we get 10. So we write 0 as the next digit to get</p>
    </li>
    <li>1/19 = .0 5 2 6 3 1 5 7 8 9 4 7 3 6 8 4 2 1 (carry = 1)<br/>
    <p>Now, if we multiply the last digit 0 by 2 and add the carry 1, we get the partial sum as 1, which is the digit where we started. 
        Proceeding with the above process will lead only in the repetition of the above sequence. Hence we stop here. 
        The entire calculation involved simple multiplication and addition and can be done mentally!
        </p>
    </li>
    </ol>
    <hr/>
    <h3>The method for finding the reciprocal of any number n, which is of the form 10x + 9, is as follows:</h3>
    <p>1. The last digit of the recurring set of numbers of the reciprocal is 1</p>
    <p>2. Initially the carry is 0</p>
    <p>3. Multiply the latest digit of the result by (x+1) and add with the previous carry to get a partial sum.</p>
    <p>4. Divide the partial sum by 10. Write the remainder as the latest digit of the result and mark the quotient as the carry.</p>
    <p>5. Repeat steps 3 and 4 till the partial sum becomes 1.</p>
    <br/>
    <p>
        This method is based on a sutra called <span class='bold'>'Ekadhikena Purvena'</span>, 
        which means <span class='bold'>'By one more than the previous one'</span>.
    </p>
    <hr/>
    <p>
        In the given example, the last digit is 9. The previous digit is 1. One more than the previous digit is 2. 
        In accordance with the sutra, we multiply it 2. Similarly the multiplier for 49 is 5, for 149 is 15, for 12789 is 1279 and so on.
    </p>
    <p>
    Finally, yet another shortcut! If you observe the reciprocal of 19, the recurring part has 18 digits. 
    You'll see that the 18th digit and the 9th digit added together gives 9. 
    Similarly, the sum of 17th and 8th digits, 16th and 7th digits etc. give 9. 
    Thus by finding the last 9 digits of the result, we can get the ramaining 9 digits by merely subtracting from 9! 
    The workload has become half! But how'll you know that you've reached the half stage? 
    You've reached the half-way mark, once the partial sum is equal to one less than the number!
    </p>
    <br/>
    <h3>Try out the reciprocals of the following numbers</h3>
      <p>1.99</p>
      <p>2.29</p>
      <p>3.79</p>
    <br/>
    <hr/>
    </div>
  )
}

export default Rec_19

const title={
    marginLeft:'40%'
  }
