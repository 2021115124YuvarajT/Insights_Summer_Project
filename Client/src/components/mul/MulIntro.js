import React from "react"
import '../division/nik_div.css'
export default function Intro() {
    return (
        <div className="body">
        <h4 style={title}>MULTIPLICATION-INTRODUCTION</h4>
        <hr/>
            <p>Multiplication is probably the most important in arithmetic. It is the basis for many other operations. 
                By improving the speed of multiplication, we can achieve spectacular performance in numerous other calculations.
                We'll see two methods, which greatly improve the speed of multiplication. They are</p>
            <ol>
                <li>Nikhilam</li>
                <li>Urdhva Tiryagbyam</li>
            </ol>
            <h4 style={{ 'margin-left': '20%' }}>Let's explore beyond the limits!</h4>
        </div>
    )
}

const title={
    marginLeft:'30%',
    fontSize:'medium'
}