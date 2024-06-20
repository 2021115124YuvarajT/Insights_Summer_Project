import {NavLink, Outlet} from "react-router-dom"
import '../division/nik_div.css'
import Nikimg1 from "../../images/nikimg1.gif" 
import Nikimg2 from "../../images/nikimg2.gif" 
import Nikimg3 from "../../images/nikimg3.gif" 
import Nikimg4 from "../../images/nikimg4.gif" 

export default function Nikhilam(){
    return(
        <div className="body">
        <h3 style={title}>NIKHILAM</h3>
        <hr/>  
        <p>You must have studied Multiplication tables in your earlier classes. By now, you'll be thinking that you should know the tables of numbers upto 10, using which you can multiply greater numbers.</p>
        <p>Is it necessary that you need to memorise tables upto 10? You can do with 5.Take the case of 9 x 7, which you know is 63.</p>
        <h3 style={lining}>Steps are as follows:</h3>
        <h4 style={lining}>Step1:</h4>
        <p>Write the two numbers, one below the other, on the left hand side. Subtract 10 from each of them, and write the difference on the right hand side as follows</p>
        <img style={image}src={Nikimg1}/>
        <h4 style={lining}>Step2:</h4>
        <p>Now multiply the numbers on the right hand side (-1 and -3 ) to get 3 as the last digit of the product. Add the two numbers on the left (9 and 7) to get 16 and subtract the nearest power of 10 (10 in this case) from it to get the next digit (to get 6).  So</p>
        <img style={image}src = {Nikimg2}/>
        <hr/>
        <h4 style={lining}>Conclusion:</h4>
        <p>This method is called 'Nikhilam'. In the above case, the numbers are close to 10. 10 is referred to as the base. Another way of obtaining the left hand side of the product is by cross-addition. In the above case 6 can be obtained by cross addition of 9 and -3 or 7 and -1.</p>
        <h3 style={lining}>Let's try some more examples!!</h3>
        <h4>Example 1:</h4>
        <img style={image}src = {Nikimg3}/>
        <h4>Example 2:</h4>
        <img style={image}src = {Nikimg4} />
        <h4>Special Case:</h4>
        <NavLink to="/mul/nik_greater"><p>What if one or both the number(s) is greater than the base?</p></NavLink>
        <h4>Example</h4>
        <img style={image}src="http://insight.sabarirb.org/Reading%20Materials/maths/arith/mul/nikhilam/examples/mulex05.gif"/>
        <h3>Note📝</h3>
        <p>The example is similar to the ones given above, but with a base 100. The only difference is that, by multiplying the last digits of the numbers, we get the last two digits of the product. In general, if we multiply two numbers which are nearer to the nth power of 10, the product of the last digits gives the last 'n' digits of the result. Note the use of 'Mishrank' in the above example. We got the product as Image23.gif (940 bytes). We replaced it as 9888.<NavLink to="/mul/nik_fmexamples">Let's see a few more examples</NavLink></p>
        <h3>Think about this❗</h3>
        <p>How do you multiply any numbers, which aren't close to powers of 10? The Indian methods have a solution for these too. We can use bases which are multiples of power of 10 (like 20,300, etc) or a fraction of powers of 10.  <NavLink to='/mul/nik_otherbase'>Click here</NavLink> to view those methods.</p>
        <h1>Wanna try some problems?</h1>
        <button><NavLink to="/mul/try_nikh" >click here</NavLink></button>
        <p>check your answers using <NavLink to="/mul/Naveesh" >Naveesh</NavLink></p>
    </div>    
    )
}
const title={
    marginLeft:'45%'
}
const lining = {
    textDecoration:'underline'
}
const image = {
    marginLeft:'25%'
}