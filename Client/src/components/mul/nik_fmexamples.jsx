import { useNavigate } from "react-router-dom"
import bigexample1 from "../../images/bigexample1.gif"
import bigexample2 from "../../images/bigexample2.gif"
import "../../components/division/nik_div.css"
export default function Nik_fmexamples(){
    const navigate=useNavigate();
    return(
        <div style={tab}>
            <h1 className="main_heading">BIGGER EXAMPLES</h1>
            <hr/>
            <p>Let's see a few examples in which numbers close to higher powers of 10 are multiplied.</p>
            <h3>1)99 x 97</h3>
            <img src={bigexample1}/>
            <h3>2)9991 x 9997</h3>
            <img src={bigexample2}/>
            <button style={{'margin-left':'26%'}}onClick={()=>{navigate(-1)}}>Back to Nikhilam</button>
        </div>
    )
}
const tab = {
    fontSize:'x-large'
}