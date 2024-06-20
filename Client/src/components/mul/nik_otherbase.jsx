import { useNavigate } from "react-router-dom"
import otherbase1 from "../../images/otherbase1.png"
import otherbase2 from "../../images/otherbase2.png"
export default function Nik_otherbase(){
    const navigate = useNavigate();
    return( 
        
        <div style={{'fontSize':'xx-large'}}>
            <h1>Nikhilam with other bases:</h1>
            <p>As the above examples shows, we can multiply any two numbers, which are nearer to any power of 10 easily. This method can be further extended. Consider 39 x 38. These two numbers are not near to any power of 10. But they are nearer to 40. So they can be multiplied as follows.</p>
            <ol>
                <li>We choose 40, a multiple of a power of 10 as the base.e</li>
                <li>Write the two numbers on the left hand side.</li>
                <li>Subtract the numbers from 40 and write them on the rigth hand side. While subtracting write the difference as a single digit (-1 and not -01), because the actual base is 10.</li>           
                <li>Multiply the numbers on the right hand side and write the R.H.S of the product</li>
                <li>Add the numbers on the left hand side and subtract 40 from the sum to get the L.H.S of the result.</li>
                <li>Since our base is 4 times the actual base(10), multiply the L.H.S value of the result by 4.</li>
            </ol>
            <h3>This looks as follows:</h3>
            <img src={otherbase1}/>
            <p>Since our base (40) is 4 times 10, we multiply the digits other than the last digit (37) by 4. Hence the result is (37x4) | 2 = 158 | 2.</p>
            <p style={{'marginTop':'20px'}}>Similarly we can have cases where the base we choose is a fraction of the powers of 10. Consider 48 x 51. Both are close to 50, which is half of 100. The calculations are similar to the case where the base is a multiple of a power of 10. But at the last step, we've to divide the result by 2.</p>
            <img src={otherbase2}/>
            <p>Since the base we've chosen is half of 100, we've to divide the leading digits by 2.Hence we get (49/2) | (-02) = 24½ | (-02) = 24 | (50 + (-02)) = 24 | 48. Thus the result is 2448. The 50 is added to -02 because of the ½. ½ is considered as 0.50 and because it occurs in the hundreds place, it is taken as 50.</p>
            <button style={{'marginLeft':'45%'}}onClick={()=>{navigate(-1)}}>Back</button>
        </div>
    
    )
}