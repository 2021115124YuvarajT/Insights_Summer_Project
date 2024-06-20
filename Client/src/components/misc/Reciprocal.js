import React from 'react'
import { useNavigate } from 'react-router-dom'
import Sidenavbar from '../Sidenavbar/Sidenavbar'
import '../division/nik_div.css'
const Reciprocal = () => {
    const navigate=useNavigate();
    return (
        <div>
            <div class='body'>
            <h3 class={title}>RECIPROCAL OF A NUMBER ENDING IN 9</h3>
            <hr/>
            <p>Calculate and tell me the reciprocal of 19 to 18 decimal places. 
                Can you do it? If you can, using the current methods, then you must be someone like Ramanujan or Shakuntala Devi!
                The current procedure looks as shown to the below:
            </p>
<br/>
<br/>
<br/>
<br/>
<div><br/>
19)<span class='complement'>1.00</span>(.052631578947368421<br/>
---->95<br/>
------50<br/>
----->38<br/>
------120<br/>
----->114<br/>
--------60<br/>
------->57<br/>
---------30<br/>
-------->19<br/>
---------110<br/>
--------->95<br/>
----------150<br/>
--------->133<br/>
-----------170<br/>
---------->152<br/>
------------180<br/>
----------->171<br/>
--------------90<br/>
------------->76<br/>
--------------140<br/>
------------->133<br/>
----------------70<br/>
--------------->57<br/>
----------------130<br/>
--------------->114<br/>
-----------------160<br/>
---------------->152<br/>
-------------------80<br/>
------------------>76<br/>
--------------------40<br/>
------------------->38<br/>
---------------------20<br/>
-------------------->19<br/>
----------------------1<br/>
                    </div>
            <h3>Now let's see the Indian method:</h3>
            <ol>
                <li>Before going to that, let me tell you something about the reciprocal of a number ending with 9.</li>
                <li>The reciprocal of a 'n' digit number repeats itself after some digits. </li>
                <li>That set of repeating digits ends with 1. </li>
                <li>For (eg.) the reciprocal of 9 has only one repeating digit and that digit is 1. </li>
            </ol>
            <button style={{'margin-left':'25%'}}onClick ={()=>navigate('/misc/rec_19')}> proceed to calculate the reciprocal of 19 </button>
        </div>
    </div> 
  )
}

export default Reciprocal

const title={
    marginLeft:'30%',
    fontSize:'medium'
  }
