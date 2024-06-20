import React from 'react'
import { useNavigate } from "react-router-dom";
import cube1 from '../../images/misc_cube1.gif'
import cube3 from '../../images/misc_cube_cube3.gif'
import cube4 from '../../images/misc_cube_cube4.gif'
import step1 from '../../images/misc_cube_step1 (1).gif'
import step2 from '../../images/misc_cube_step2 (1).gif'
import step3 from '../../images/misc_cube_step3 (1).gif'
const Cube = () => {
  const navigate=useNavigate();
  return (
    <div class='body'>
    <h3 style={title}> THE CUBING METHOD </h3>
    <hr/>
    <p>We have seen Indian Mathematical techniques for squaring numbers mentally. 
        There are techniques to calculate higher powers too. 
        Here, let us deal with a technique for cubing two digit numbers. We'll begin with an example.
    </p>
    <p>Consider the number "24" for instance. The cube of "24" is calculated as follows:</p>
    <p>Write the cube of the leftmost digit i.e., "2"</p>
    <p class='center-para'>2<sup>3</sup>=8<br/><span class='r-center-para'>8</span></p>
    <p>Multiply this result by the ratio between the units digit and the tens digit of the given number. Write this product by the side.</p>
    <p class='center-para'>8 x (4 / 2) = 16 <br/><span class='r-center-para'>8 &nbsp; &nbsp; &nbsp;16</span></p>
    <p>Repeat the above process two more times. The result of the previous multiplication = "16". Hence, we get</p>
    <p class='center-para'>16 x (4 / 2) = 32<br/><span class='r-center-para'>8 &nbsp; &nbsp; &nbsp;16&nbsp; &nbsp; &nbsp;32</span></p>
    <p>Now, the result of previous multiplication = "32". Multiplying this result by the ratio, we get</p>
    <p class='center-para'>32 x (4 / 2) = 64<br/><span class='r-center-para'>8 &nbsp; &nbsp; &nbsp;16&nbsp; &nbsp; &nbsp;32&nbsp; &nbsp; &nbsp;64</span></p>
    <p>Note that "64" , which was obtained last, is the cube of the units place - "4" of the given number.</p>
    <p>Now,take the middle two numbers (16 and 32). Double them and write them below the numbers written already, i.e.,</p>
    <p class='center-para'>16 x 2 = 32<br/>32 x 2 =64</p>
    <p class='r-center-para'>8 &nbsp; &nbsp; &nbsp;16&nbsp; &nbsp; &nbsp;32&nbsp; &nbsp; &nbsp;64</p>
    <p class='r-center-para'>32&nbsp; &nbsp; &nbsp;64</p>
    <p>After this, just add up the numbers written. Presto! You get the cube of the number. The addition is done as follows.</p>
    <p class='img-wrapper'><img src={cube1}/></p>
    <p>In the above addition, we've added up the numbers in each stage to a single digit, with the carry produced being taken to the next stage. 
        For "64" , we write the units place "4" as the digit in the answer and the rest  "6" as the carry for the next stage. 
        In the next stage, we add up "64", "32" and "6" (previous carry) to get "102" as the result Of this "102",
        "2" is placed as a digit in the answer and the rest of the digits are taken as carry. 
        The addition is continued further in the same way and we get "13824" as the cube of "24".
    </p>
    <p>We'll workout one more example. Let us find the cube of "35". 
        Here, the ratio of our multiplication is  (5/3). 
        So, proceeding in the usual way, we get
    </p>
    <p class='img-wrapper'><img src={step1}/></p>
    <p>In the next step, we double 45 and 75.</p>
    <p class='img-wrapper'><img src={step2}/></p>
    <p>And finally, we add up the numbers.</p>
    <p class='img-wrapper'><img src={step3}/></p>
    <p>Thus, 35<sup>3</sup> =  42875.<br/>Just to familiarize with the method, here are a few more examples</p>
    <p class='r-center-para' >a) 17<sup>3</sup>=> 4913</p>
    <p class='img-wrapper'><img src={cube3}/> </p>
    <p class='r-center-para' >b) 83<sup>3</sup> => 571787</p>
    <p class='img-wrapper'><img src={cube4}/></p>
    <br/>
      <button style={{'margin-left':'13%'}}onClick ={()=>navigate('/misc/mishrank')}>MISHRANK METHOD OF CUBING</button>&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick ={()=>navigate(-1)}>BACK TO WHERE YOU LEFT</button>
      <br/>
      <hr/>
    </div>
  )
}

export default Cube

const title={
  marginLeft:'40%',
  fontSize:'medium'
}