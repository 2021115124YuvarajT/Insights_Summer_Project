import React,{useState} from 'react';
import './nik_div.css';
import Sidenavbar from '../Sidenavbar/Sidenavbar';
import { useNavigate } from "react-router-dom";

const questions_set_1 = [
  { id: 1, question: "1.5923 by 84 ", Q: 70, R: 43 },
  { id: 2, question: "2. 38987 by 73 ", Q: 534, R: 5 },
  { id: 3, question: "3. 115491 by 137", Q: 843, R: 0 },
  { id: 4, question: "4. 425934 by 851", Q: 500, R: 434 },
  { id: 5, question: "5. 75313579 by 1213", Q: 62088, R: 835 }
];
        
const questions_set_2 = [
    { id: 1, question: "1.31429 by 78 ", Q: 402  },
    { id: 2, question: "2.144925 by 282 ", Q: 513 },
    { id: 3, question: "3.635492 by 8413 ", Q: 75 },
    
  ];

const Exercise2 = () => {
    const [quotients, setQuotients] = useState(Array(5).fill(""));
    const [remainders, setRemainders] = useState(Array(5).fill(""));
    const [verifications, setVerification] = useState(Array(5).fill("give it a try!"));

    function handleChangequotient(event, index) {
        const newQuotients = [...quotients];
        newQuotients[index] = event.target.value;
        setQuotients(newQuotients);
      }
    function handleChangeremainder(event, index) {
        const newRemainders = [...remainders];
        newRemainders[index] = event.target.value;
        setRemainders(newRemainders);
      }
    function handleShow(index) {
        const correctQuotients = [...quotients];
        correctQuotients[index] = questions_set_1[index].Q;
        setQuotients(correctQuotients);

        const correctRemainders = [...remainders];
        correctRemainders[index] = questions_set_1[index].R;
        setRemainders(correctRemainders);
      }
      function handleVerify(index) {
        const isCorrect = (parseInt(remainders[index]) === questions_set_1[index].R) && (parseInt(quotients[index]) === questions_set_1[index].Q);
        const newVerification = [...verifications];
        newVerification[index] = isCorrect ? "Correct" : "Wrong";
        setVerification(newVerification);
      }

      function handleShow_2(index) {
        const correctQuotients = [...quotients];
        correctQuotients[index] = questions_set_2[index].Q;
        setQuotients(correctQuotients);
      }
      function handleVerify_2(index) {
        const isCorrect = parseInt(quotients[index]) === questions_set_2[index].Q;
        const newVerification = [...verifications];
        newVerification[index] = isCorrect ? "Correct" : "Wrong";
        setVerification(newVerification);
      }
      const navigate=useNavigate();    
  return (
    <div>
        <Sidenavbar/>
        <div className="body">
        <h3 style={title}>EXERCISES PART-2</h3>
        <hr/>
        <h4>Q2)Find the quotient and remainder in the following divisions. Go back, and make corrections wherever necessary:</h4>
        {questions_set_1.map((q,index) => (
            <div key={q.id}>
            <p>{q.question}</p>
            <input className="input_q" type="text" style={input_class}
            onChange={(e) => handleChangequotient(e, index)} value={quotients[index]}/>&nbsp;&nbsp;
            <input className="input_r" type="text" style={input_class}
             onChange={(e) => handleChangeremainder(e, index)} value={remainders[index]}/>&nbsp;&nbsp;
            <button className="input_button" onClick={() => handleShow(index)}>Show Answer</button>&nbsp;&nbsp;
            <button className="verify_button" onClick={() => handleVerify(index)}>Verify Answer</button>&nbsp;&nbsp;
            <span className="try_span" style={verifications[index]=== "Wrong" ? {'color':'red'}:{'color':'green'}}>
                {verifications[index]}
            </span>
            </div>
            ))}
        <br/>
        <hr/>
        <h4>Use Mishrank wherever necessary to obtain the quotient for the following problems</h4>
        {questions_set_2.map((q,index) => (
            <div key={q.id}>
            <p>{q.question}</p>
            <input className="input_q" type="text" 
            onChange={(e) => handleChangequotient(e, index)} value={quotients[index]}/>
            <button className="input_button" style={input_button} onClick={() => handleShow_2(index)}>Show Answer</button>
            <button className="verify_button" style={verify_button} onClick={() => handleVerify_2(index)}>Verify Answer</button>&nbsp;&nbsp;
            <span className="try_span" style={verifications[index]=== "Wrong" ? {'color':'red'}:{'color':'green'}}>
                {verifications[index]}
            </span>
            </div>
            ))}
            <br/><hr/>
            <br/>
            <button style={{'margin-left':'13%'}}onClick ={()=>navigate('/division')}>BACK TO BASICS OF DIVISION</button>&nbsp;&nbsp;
            <button onClick ={()=>navigate(-1)}>BACK TO WHERE YOU LEFT</button>
            <br/>
            <br/>
            <hr/>
    </div>
    <br/>
    </div>
    
  );
};

export default Exercise2;

const input_class = {
  fontSize:'large',
  fontWeight:'bold',
  marginLeft:'25px',
  borderRadius:'15px',
  textAlign:'center'
  }
const input_button = {
  fontSize: '20px',
  marginLeft:'20px',
  padding: '5px',
  width:'200px',
  marginLeft:'50px'
}
const verify_button  = {
marginLeft:'50px',
fontSize:'20px',
width:'200px',
padding:'5px',
textDecoration:'none'
}

const title={
  marginLeft:'40%'
}