import { NavLink , useNavigate } from "react-router-dom";
import moreeg from "../../images/mul_moreexample1.gif"
import '../division/nik_div.css'
export default function More(){
    const navigate=useNavigate();
    return(
        <div className="more">
            <h1>Multiplication of 5 digit numbers</h1>
            <h2>Multiplication of 5 digit numbers</h2>
            <img src={moreeg}/>
            <h2>Thus the final  answer is 5268980031.</h2>
            <p>Check the above result with <NavLink to="/mul/Naveesh">Navasesh</NavLink>.</p>
            <button style={{'margin-left':'45%'}}onClick ={()=>navigate(-1)}>BACK</button>
        </div>
    )
}