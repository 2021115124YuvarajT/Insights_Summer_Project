import React, { useState } from 'react';
import './nik_div.css';
import { useNavigate } from "react-router-dom";
import book from '../../images/ex_book.gif'

const Exercises = () => {
  const [answers, setAnswers] = useState(Array(5).fill(""));
  const [verificationStatus, setVerificationStatus] = useState(Array(5).fill("give it a try!"));
  const navigate=useNavigate();
  const questions_set_1 = [
    { id: 1, question: "1.7453 by 79", ans:94.341 },
    { id: 2, question: "2.3517 by 127", ans:27.692},
    { id: 3, question: "3.46315 by 1054", ans:43.942 },
    { id: 4, question: "4.710.014 by 39", ans:18.205},
    { id: 5, question: "5.429345 by 7201", ans:59.622 }
  ];
  function handleChange(event, index) {
    const newanswers = [...answers];
    newanswers[index] = event.target.value;
    setAnswers(newanswers);
  }
function handleShow(index) {
    const correctanswers = [...answers];
    correctanswers[index] = questions_set_1[index].ans;
    setAnswers(correctanswers);
  }
  function handleVerify(index) {
    const isCorrect = (parseFloat(answers[index]) === questions_set_1[index].ans);
    const newVerification = [...verificationStatus];
    newVerification[index] = isCorrect ? "Correct" : "Wrong";
    setVerificationStatus(newVerification);
  }
       

  return (
    <div className="body">
      <h1 style={title}>EXERCISES</h1>
      <hr/>
      <p><span><img src={book}/></span>Q1)Divide the following numbers upto 3 decimal places:</p>
      {questions_set_1.map((q,index) => (
            <div key={q.id}>
            <p>{q.question}</p>
            <input style={input_class} className="input_r" type="text" onChange={(e) => handleChange(e, index)} value={answers[index]}/>
            <button className="input_button" style={input_button} onClick={() => handleShow(index)}>Show Answer</button>
            <button className="verify_button" style={verify_button} onClick={() => handleVerify(index)}>Verify Answer</button>
            <span className="try_span" 
            style={verificationStatus[index]=== "Wrong" ? {'color':'red','marginLeft':'20px'}:{'color':'green','marginLeft':'20px'}}>
            {verificationStatus[index]}
            </span>
            </div>
      ))}
      <br/>
      <button style={{'margin-left':'13%'}}onClick ={()=>navigate('/division/ex_2')}>NEXT PART OF QUESTIONS</button>&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick ={()=>navigate(-1)}>BACK TO WHERE YOU LEFT</button>
      <br/>
      <hr/>
    </div>
  );
};

export default Exercises;

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
const input_class = {
fontSize:'large',
fontWeight:'bold',
marginLeft:'30px',
borderRadius:'15px',
textAlign:'center'
}

const title={
  marginLeft:'40%'
}
