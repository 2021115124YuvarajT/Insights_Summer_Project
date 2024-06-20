import "../division/nik_div.css"

export default function Divs_how() {
    return (
        <div className="body">
            <h2 style={title}>How does this method work?</h2>
            <hr/>
            <p>Let the base of the numbers we consider be 'b'. Let us call the number whose divisibility is to be tested as 'n'. Let the divisor be 'd' and the ekadhika be 'e'. Then,</p>
            <div >
                <h4>n=bx+y(say)</h4>
            </div>
            <p>i.e., 'y' is the units digit of the number and 'x'- the rest of the digits put together. In finding the ekadhika, we multiply the divisor by some number such that the product ends in (b-1)<span style={brackets}>(which is '9' in decimal notation).</span></p>
            <div >
                <h4>i.e.,[ d x (some number) ] ends in the digit (b-1)</h4>
            </div>
            <p>We add '1' to this product and knock off the zero in the units place. This is the ekadhika. Therefore for some number 'p',</p>
            <div >
                <h4>(d.p + 1) / b  = e</h4>

                <h4> ={">"} b.e = d.p + 1</h4>
            </div>
            <p>After finding the ekadhika,   we proceed with osculation. Algebraically, osculation can be described as follows. We take the number 'n' (bx+y) and multiply its units digit (y) with the ekadhika (e) and add the product with the rest of the digits(x).Therefore, the new number 'm' obtained is</p>
            <div>
            <div >
                <h4>m = y.e + x</h4>
                <h4>bm    = by.e + bx</h4>
            </div>
                <div >
                    <h4>=y.(dp + 1) + bx ( since b.e = d.p +1)</h4>
                    <h4>=ydp + y + bx  </h4>
                    {<h4>=ydp + n (since n=bx + y)</h4>}
                </div>
                
            </div>

            <p>We can see that 'm' is the sum of 'n' and a number divisible by 'd' (yd.p). 
                Therefore 'n' is divisible by 'd' if and only if 'm' is divisible by 'd'.
                 So we have got a smaller number m 
                (Is it smaller always? Why?) now to check for  divisibility. 
                This number too, can again be reduced to a smaller number by osculation. 
                This process is continued until we get a number of the size of the divisor whose divisibility can be easily determined.</p>
            <p style={{'marginTop':'20px'}}>Thus, the osculation process by the ekadhika determines the divisibility
             of a number by another correctly.</p>



        </div>
    )
}

const topcontainer = {
    fontSize: 'x-large'
}
const brackets = {
    color: 'blue',
    textDecoration: 'none'
}
const title={
    marginLeft:'40%'
  }
  