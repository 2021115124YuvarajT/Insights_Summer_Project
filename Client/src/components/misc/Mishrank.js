import React from 'react'
import { useNavigate } from 'react-router-dom'
import mish1 from'../../images/misc_mishrank_mish1 (1).gif'
import cube2 from'../../images/misc_mishrank_cube2.gif'
import mish2 from'../../images/misc_mishrank_mish2 (1).gif'
import mish3 from'../../images/misc_mishrank_mish3 (1).gif'
import mish4 from'../../images/misc_mishrank_mish4 (1).gif'
const Mishrank = () => {
    const navigate=useNavigate();
  return (
    <div class='body'>
    <h3 style={title}> MISHRANK AGAIN! </h3>
    <hr/>
    <p>Like many other places, here too, the use of mishrank makes things easier. Let us take an example. 
        Let us find the cube of "99".  Note that 93 = 729. The normal way would be
    </p>
    <p class='img-wrapper'><img src={cube2}/></p>
    <p>However, if we use mishrank, the same problem can easily be solved as follows.</p>
    <p class='r-center-para'>99 can be represented using mishrank as 10<span class='complement'>1</span></p>
    <p>Here, we may consider '10' similar to the tens digit in the previous examples. Hence, the common ratio is (-1) / 10.</p>
    <p class= 'r-center-para'>103 = 1000.<br/>1000 x (-1)/10 = -100.<br/>-100 x (-1) / 10 = 10<br/>10 x (-1)/10 = -1</p>
    <p></p>
    <p class='img-wrapper'><img src={mish1}/></p>
    <p>Here, we write -1 using mishrank. In the next step, we get</p>
    <p class='img-wrapper'><img src={mish2}/></p>
    <p>i.e., 20+10 = 30 => carry = 3.</p>
    <p>Then, continuing the addition, we get</p>
    <p class='img-wrapper'><img src={mish3}/></p>
    <p>i.e., -200 + -100 + 3 = -297. The units digit '7' is written in mishrank form and '-29' is taken as the negative carry. Thus, finally we get</p>
    <p class='img-wrapper'><img src={mish4}/></p>
    <p>Eliminating the negative digits from 971<span class='complement'>7</span>0<span class='complement'>1</span>, we get 970299 as the result.</p>
    <button style={{'margin-left':'35%'}} onClick ={()=>navigate(-1)}>BACK TO WHERE YOU LEFT</button>
    <br/>
    <hr/>
    </div>
  )
}

export default Mishrank

const title={
  marginLeft:'40%',
  fontSize:'medium'
}