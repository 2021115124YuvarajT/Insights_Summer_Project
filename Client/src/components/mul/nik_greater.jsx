import Nik_greater1 from "../../images/nik_greater1.gif"
import Nik_greater2 from "../../images/nik_greater2.gif"
import { useNavigate } from "react-router-dom";
export default function Nik_great() {
    const navigate = useNavigate();
    return (
        <div style={{ 'font-size': 'x-large' }}>
            <h1>NUMBERS GREATER THAN THE BASES</h1>
            <p>The procedure is similar as before, excepting that if the product of the last digits yield a negative value, then convert it into positive values by borrowing from the previous digits.</p>
            <h3>For example:9 x 12</h3>
            <img style={image}src={Nik_greater1} />
            <p>
                In the above case, the last digit became -2. Since it is a negative number, we subtract 2 from 10 to get 8 as the last digit. Since we've borrowed 1 from 11, it becomes 10. Hence the answer is 108.</p>
            <h3>Similarly</h3>
            <h3>13 x 7</h3>
            <img style={image} src={Nik_greater2} />
            <button style={bak} onClick={() => { navigate(-1) }}>Back to Nikhilam</button>
        </div>
    )
}
const image = {
    marginLeft:'25%'
}
const bak = { 
    marginLeft:'20px',
    border:'4px solid black '
}
