import "../division/nik_div.css"
export default function Squar_method(){
    return(
        <div className="body">
            <h3 style={title}>Squarring using dwanda</h3> 
            <hr/>
            <p>The concept of Dwandwa can be used to calculate the square of a number. Let's illustrate  by squaring 539:</p>
            <p>Assume that there are two rulers. One of them is covering all the digits of the number except the last. The second ruler is to the right of the last digit.Calculate the Dwandwa for the set of digits not covered by the ruler.</p>
            <h3>Step 1:</h3>
            
           
            <p>Assume that there are two rulers. One of them is covering all the digits of the number except the last. The second ruler is to the right of the last digit.Calculate the Dwandwa for the set of digits not covered by the ruler.</p>
            <p style={style1}><span style={{'background-color':'white'}}>53</span>9<sup>2</sup></p>
            <p  style={style2} >D(9)=81</p>
            <p> <p>In the answer, write the last digit 1 and keep 8 as the carry</p></p>
            <p style={style1}>539<sup>2</sup>=</p>
            <p  style={style2} >1(carry=8)</p>
            
            
            
            <h3>Step 2:</h3>
            <p style={style1}><span style={{'background-color':'white'}}>5</span>39<sup>2</sup></p>
            <p  style={style2}> D(39) = 54</p>
            <p>Now add the 54, the Dwandwa of 39, to the previous carry 8 to obtain 62. Keep 6 as the carry and write 2 as the previous digit of the result.</p>
            <p style={style1}>539<sup>2</sup>=</p>
            <p  style={style2} >21(carry=6)</p>
            

            <h3>Step 3:</h3>
            <p style={style1}><span style={{'background-color':'white'}}></span>539<sup>2</sup></p>
            <p  style={style2}>D(539) = 99</p>
            <p>Repeating the above step, we get</p>
            <p style={style1}>539<sup>2</sup>=</p>
            <p  style={style2} >521(carry=10)</p>
            <p>The first ruler is to the left of the number. Now, keep the first ruler stationary. Move the second ruler, one position to the left. Calculate the Dwandwa for the uncovered digits</p>


            <h3>Step 4:</h3>
            <p style={style1}>53<span style={{'background-color':'white'}}>9</span><sup>2</sup></p>
            <p  style={style2}>D(53) = 30</p>
            <p>.</p>
            <p style={style1}>539<sup>2</sup>=</p>
            <p  style={style2} >_ _ 0521(carry=4)</p>
            <p>Repeat the process, by shifting the second ruler by 1 position to the left, till the second ruler fully covers the number.</p>
        
            <h3>Step 5:</h3>
            <p style={style1}>5<span style={{'background-color':'white'}}>39</span><sup>2</sup></p>
            <p  style={style2}>1D(5) = 25</p>
            <p>If  you again shift the second ruler by 1 position, then the whole number would be covered by the second ruler. Hence stop at this position. Add 25 to the carry 4 to get 29, and write it as the first two digits. Hence the answer is</p>
            <p style={style1}>539<sup>2</sup>=</p>
            <p  style={style2} >290521</p>
        </div>
    )
}
const style1={
    display:'inline',
    marginRight:'15px'
}
const style2 = {
    display:'inline'
}
const title={
    marginLeft:'40%'
  }