import React, { useState } from "react";
import '../code/Code.css'
import { useNavigate } from "react-router-dom";

export default function More_place() {
  const [solution, setSolution] = useState("");
    const navigate=useNavigate();
  function handleClick(solutionNumber) {
    if (solutionNumber === 1) {
        setSolution(
            "<h3>Solution 1:</h3> The answer is <strong>42</strong>. <p>The working is easy and is left as an exercise...</p>"
          );
          
    } else if (solutionNumber === 2) {
      setSolution(
        "<h3>Solution 2: </h3><p> As'b' is the base, removing the negative digits from ..., we get 81<span style='text-decoration:overline;'>a</span>3<span style='text-decoration:overline;'>c</span>2, where x=b-c i.e., x=e+1.</p> <p>Therefore, 80d2x2 can be represented as 80d2(e+1)2.</p> <p> The difference between this and the divisor 80d2e0 is 12 (base b) or b+2 (since 12 (base b) = bx1 + 2). This is the required remainder...</p>"
      );
    } else if (solutionNumber === 3) {
      setSolution(
        "<h3>Solution 3:</h3> <h4> Consider a '2' digit number in base 'n' representation.</h4> <p>Let it be (x y)n i.e., y + nx. Here, x and y range from 0 to n-1.</p> <p> Hence, the largest number that can be represented in 2 digits is when y=x=n-1. This number is (n-1) + (n-1)n = n2-1. Moreover, in the base n^2 representation, each digit ranges from 0 to n2-1. Thus, a base 'n^2' digit can be represented in base 'n' using 2 digits. So, an 'm' digit base 'n^2' number can be represented as a '2m' digit base 'n' number. Thus the answer to our problem is 2 x 1947 = 3894...</p><p>Since the base 'n^2' representation of the number referred by the question  has 1947 digits, it can be represented as :</p><p>(a1946  a1945   ...  a2  a1  a0) (base n^2 ) =  a0 +  a1 n^2  +   a2 n^4 +  ...  +  a1946 n3892</p><p>where the a is are base 'n^2' digits. Representing each ai as 2-digit base'n' numbers, (c<sub>i</sub>b<sub>i</sub>)n, we get a<sub>i</sub>=b<sub>i</sub>+c<sub>i</sub>n (b<sub>i</sub>,c<sub>i</sub> range from 0 to n-1). Now the number becomes</p><p>(a<sub>1946</sub>  a<sub>1945</sub>   ...  a<sub>2</sub>  a<sub>1</sub>  a<sub>0</sub>) (base n^2 ) =  (b<sub>0</sub>+c<sub>0</sub>n) +  (b<sub>1</sub>+c<sub>1</sub>n) x n2  +  ...  +  (b1946+c1946n) x n3892</p><p>  =   b<sub>0</sub> + c<sub>0</sub>n + b<sub>1</sub>n^2 + ... + c<sub>1946</sub>n<sup>3893</sup> </p><p> =>   there are 3894  base 'n' digits.</p>"
      );
    }
  }
  

  return (
    <div className="content-body">
      <h3 class='main_heading'>STEP BY STEP SOLUTION</h3>
      <hr/>
      <h3>Get Ready for some more exercise!!!</h3>
      <div style={question}>
        <p>1. Eliminate the digits greater than half the base from 84679 (base 10).</p>
      </div>
      <div style={question}>
        <p>
          2. Given that 'b' is the base, d=b-a and e=b-c-1, what is the remainder when 81<span className="bar">a</span>3
          <span style={bar}>c</span>2 is divided by 80d2e0?
        </p>
      </div>
      <div style={question}>
        <p>
          3. 'n' being a positive integer, how many digits will be there in a base 'n' representation of a number if the
          base 'n2' representation had 1947 digits?
        </p>
      </div>
      <button style={b} onClick={() => handleClick(1)}>Solution 1</button>
      <button style={b} onClick={() => handleClick(2)}>Solution 2</button>
      <button  style={b} onClick={() => handleClick(3)}>Solution 3</button>
      <div>{solution && <Solution text={solution} />}</div>
      <button style={back} onClick={()=>{navigate(-1)}}>Back</button>
    </div>
  );
}

function Solution({ text }) {
    return <div className="solution" dangerouslySetInnerHTML={{ __html: text }} />;
  }
  
const bar = {
  textDecoration:'overline'
}
const question = {
  fontSize:'x-large'
}
const solution = {
  fontSize:'x-large',
  marginLeft:'50px'
}
const b  = {
  marginLeft:'50px',
  padding:'10px',
  borderRadius:'10px'
}
const back = {
  marginLeft:'45%'
}