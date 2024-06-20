import React,{useState} from 'react'
import '../division/nik_div.css';

const How_it_works = () => {
  return (
    <div class='body'>
    <h3 class='main_heading'>CURIOUS ABOUT ABOUT HOW IT WORKS???</h3>
    <hr/>
    <p>How  does this method  work?</p>
    <p class='r-center-para'>Consider  (a+b)<sup>3</sup>   =   a<sup>3</sup> + 3a<sup>2</sup>b + 3ab<sup>2</sup> + b<sup>3</sup></p>
    <p>This can be written as</p>
    <p class='r-center-para'>a<sup>3</sup> + a<sup>2</sup>b + ab<sup>2</sup> + b<sup>3</sup> + 2a<sup>2</sup>b + 2ab<sup>2</sup><br/></p>
    <span>i.e.</span>
    <p class='r-center-para'>a<sup>3</sup>   &nbsp;   +   &nbsp; a<sup>2</sup> b  +  &nbsp;   ab<sup>2</sup>     +    b<sup>3</sup> </p>
    <p class='r-center-parap'>   2 a<sup>2</sup> b  &nbsp;&nbsp; + &nbsp;   2ab<sup>2</sup>  </p> 
    <p class='r-center-parap'> a<sup>3</sup>   &nbsp; +   3a<sup>2</sup>b  &nbsp;       +    3ab<sup>2</sup>    +    b<sup>3</sup>  </p> 
    <p>Observe that  a3,   a2b, ab2,  b3  are in geometric progression with common ratio (b/a).</p>  
    <p>That is,</p>
    <p class='r-center-para'>a3   x  (b/a)  =   a2b<br/>
        a<sup>2</sup>b   x  (b/a)  =  ab<sup>2</sup><br/>
        ab<sup>2</sup>   x  (b/a)  =   b<sup>3</sup><br/>
    </p>
    <p>In our process of cubing, ' a'  & 'b'  are the tens and  units digits respectively. 
        To compute the terms of the geometric series, we progressively multiply by (b/a). This gives:</p>
        
        <p class='r-center-para'>a<sup>3</sup> + a<sup>2</sup>b + ab<sup>2</sup> + b<sup>3</sup> </p>
        <p>Then, we double the two middle terms and add them up.  i.e,  (a<sup>2</sup>b +  ab<sup>2</sup>)  x  2  =   2a<sup>2</sup>b + 2ab<sup>2</sup>  </p>
        <p class='r-center-para'>a<sup>3</sup>   &nbsp;   +   &nbsp; a<sup>2</sup> b  +  &nbsp;   ab<sup>2</sup>     +    b<sup>3</sup> </p>
        <p class='r-center-parap'>   2 a<sup>2</sup> b  &nbsp;&nbsp; + &nbsp;   2ab<sup>2</sup>  </p> 
        <p class='r-center-parap'> a<sup>3</sup>   &nbsp; +   3a<sup>2</sup>b  &nbsp;       +    3ab<sup>2</sup>    +    b<sup>3</sup>  </p> 
        <p>This gives the required cube of the number i.e,  (10a +  b)3.</p>
    </div>
  )
}

export default How_it_works

const title={
  marginLeft:'40%'
}
