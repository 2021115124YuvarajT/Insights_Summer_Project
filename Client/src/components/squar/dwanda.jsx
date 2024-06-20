import source from "../../images/dwandaeq1.png"
import source2 from "../../images/dwandaeq2.png"
import "../division/nik_div.css"
export default function Dwanda() {
    return (
        <div className="body">
            <h1 style={{'margin-top':'0px'}}className="main_heading">Dwanda</h1>
            <hr />
            <p style={{ 'margin-left': '20px' }}>We introduce a new term called Dwandwa. We will use the notation D( ) to represent Dwandwa.</p><br />
            <h4>The following rules are applied to evaluate Dwandwa:</h4>

            <h3>Rules:</h3>

            <h4>1{")"}Dwandwa of a single digit number is simply the square of the number</h4>
            <div>
                <p>  D(a) = a2</p>
                <p>For eg:</p>
                <ol style={{ 'listStyle': 'circle '}}>
                    <li>D(3)=9</li>
                    <li>D(5)=25</li>
                </ol>
            </div>
            <h4>2{")"}Dwandwa of a number with even no. of digits is obtained as follows</h4>
            <div>
                <p>  Multiply the first and last digits, then multiply the second and last but one digit and so on till you have found the product of the middle two digits. Sum these products and multiply by two to obtain the Dwandwa.</p>
                <h5>Here are some examples to understand the method.</h5>
                <ol>
                    <li>D(12) = 2 (1x2) = 2x2 = 4</li>
                    <li>D(4608) = 2 (4x8 + 6x0) = 2x32 = 64</li>
                    <li>D(427682) = 2(4x2 + 2x8 + 7x6) = 2x66 = 132</li>
                    <li>D(92786254) = 2(9x4 + 2x5 + 7x2 + 8x6) = 2x108 = 216</li>
                </ol>
                <h4>The method is represented by the equation given below.</h4>
                <p><img src={source} /></p>

            </div>
            <div>
                <h4>3{")"}Dwandwa of a number with 2n+1 (odd no.) digits is obtained as follows</h4>
                <p>It is similar to the case with even number of digits except for the extra middle digit. Multiply the first and last digits, then multiply the second and last but one digits and so on till you reach the middle digit. Sum these products and multiply the sum by two. Square the middle digit and add it to the sum obtained previously to obtain the Dwandwa.</p>
                <h4>The following examples will make things more clear.</h4>
                <ol>
                    <li>D(963) = 2 (9x3) + 6<sup>2</sup> = 2x27 + 36  =  90</li>
                    <li>D(34907) = 2 (3x7 + 4x0) + 9<sup>2</sup> = 2x21 + 81 = 123</li>
                    <li>D(52413) = 2 (5x3 + 2x1) + 4<sup>2</sup> = 2x17 + 16 = 50</li>
                    <li>D(6192756) = 2 (6x6 + 1x5 + 9x7 ) + 2<sup>2</sup> = 2x104 + 4 = 212</li>
                </ol>
            </div>
            <h4>The following equation gives the method:</h4>
            <p ><img src={source2} /></p>
            <h4>As you can observe, the first case is just a special case of the third.</h4>
            <br/>
        </div>
    )
}
const margin = {
    marginLeft: '50px'
}
const marginleft = {
    marginLeft:'70px'
}
const listStyle={
    listStyle:'circle',
    marginLeft:'200px'
}