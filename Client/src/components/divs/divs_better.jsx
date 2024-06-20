import "../division/nik_div.css"
export default function Divs_better(){
    return(
        <div className="body">
            <h3 style={title}>Bigger Divisors - Better Techniques</h3>
            <hr/>
            <p>The cases encountered so far had dealt only with small divisors and hence small osculators. However there are techniques to deal with bigger numbers. The bigger divisors can be grouped under 2 categories.</p>
            <h3>1) Divisors Having A Regularity:</h3>
            <ol style={{'listStyleType':'circle'}}>
                <li>Those which have a 9 or a series of 9's as their last digit. The Ekadhika of these numbers can be determined by dropping the series of 9's and adding a 1 to the remaining number. (eg) Ekadhika of 59999 is 6.</li>
                <li>	Numbers which have a 1 as their last digit preceeded by a series of zeros. The Negative Ekadhika of these numbers can be determined by dropping all the zeroes followed by the ending 1. (eg) Negative Ekadhika of 50001 is 5.</li>
            </ol>
            <div>
            <h3>Illustration:-</h3>
            <h4>Is 69492392 divisible by 199 ?</h4>
            <p>Here we can drop two 9's. Note that for the 9's to be dropped, they should occur in the last few digits of the number, and they should be Continuous. The Ekadhika is 2, obtained by dropping the 9's and adding a 1 to the result. Since two 9's were dropped, this number is denoted by P2. The number 69492392 is not taken as such. Instead it is grouped into numbers of two digits each (Since two 9's were dropped ) and used. (ie) 69492392 becomes 69 49 23 92. The usual method is carried out.</p>
            <ol>
                <li>Multiply 92 by 2, add 23 to get 207. Simplify it to 8</li>
                <li>Multiply 8 by 2, add 49 to get 65.</li>
                <li>Multiply 65 by 2 add 69 to get 199.</li>``
            </ol>
            <p>199 divisible by 199. Hence 69492392 is divisible by 199.</p>

            <p>What about 341918701268? Is it divisible by 5999 ? How will you group the digits of 341918701268 to proceed with the technique ?</p>

            </div>
            <h3>Divisors That Do Not Fall Under The Category Above:</h3>
            <p style={forpara}>For Divisors that do not fall into the above category, We multiply them with suitable numbers to obtain numbers that end with a series of 9's or ending with a series of zeros followed by a 1. (eg) What is the osculator for 857 ?</p>

            <p>It can be observed that 857 x 7 = 5999. Ekadhika of 5999 is 6. 6 is used for determining divisibility. But there is one important modification. It should be observed that we are actually testing the divisibility by 5999 instead of 857. So if the numerator is not divisible by 7, even if it is divisible by 857, the end result will not be divisible by 5999. This can be adjusted by testing the end number for divisibility by 857 instead of 5999.</p>
            
            <p>Using the techniques mentioned above it is possible to determine divisibility of one number by another with great speeds. Can you find a "Classical" Mathematical explanation as to why this Indian technique works ?</p>
            
           <b><p>Click on the next topic 'How does it work' to clarify the question.</p></b>
            </div>
        
    )
}
const topcontainer={
    marginLeft:'230px',
    fontSize:'x-large'
}
const forpara={
    marginBottom:'30px'
}
const title={
    marginLeft:'40%'
  }