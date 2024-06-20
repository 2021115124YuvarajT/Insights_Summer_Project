import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../code/Code.css';
const questions = [
  { id: 1, question: "1. 1.9 x 8", answer: 15.2 },
  { id: 2, question: "2. 12 x 9", answer: 108 },
  { id: 3, question: "3. 96 x 105", answer: 10080 },
  { id: 4, question: "4. 99995 x 99994", answer: 9998900030 },
  { id: 5, question: "5. 41 x 39", answer: 1599 },
  { id: 6, question: "6. 497 x 492", answer: 244524 },
  { id: 7, question: "7. 2990 x 3010", answer: 8999900 }
];

export default function TryN() {
    const navigate = useNavigate();
  const [answers, setAnswers] = useState(Array(7).fill(""));
  const [verification, setVerification] = useState(Array(7).fill("give it a try!"));

  function handleChange(event, index) {
    const newAnswers = [...answers];
    newAnswers[index] = event.target.value;
    setAnswers(newAnswers);
  }

  function handleClick(index) {
    const newAnswers = [...answers];
    newAnswers[index] = questions[index].answer;
    setAnswers(newAnswers);
  }

  function handleVerify(index) {
    const isCorrect = parseFloat(answers[index]) === questions[index].answer;
    const newVerification = [...verification];
    newVerification[index] = isCorrect ? "Correct" : "Wrong";
    setVerification(newVerification);
  }

  return (
    <div className="content-body">
        <h3 class='main_heading'>Try the following problems!</h3>
        <hr/>
      <div>
        {questions.map((q, index) => (
          <div key={q.id}>
            <p>{q.question}</p>
            <input
              style={input_class}
              type="text"
              onChange={(e) => handleChange(e, index)}
              value={answers[index]}
            />
            <button style={input_button} onClick={() => handleClick(index)}>
              Show Answer
            </button>
            <button style={verify_button} onClick={() => handleVerify(index)}>
              Verify
            </button>
            <span className="try_span" style={verification[index]=== "Correct"|| verification[index]==="give it a try!" ? {'color':'green','marginLeft':'20px'}:{'color':'red'}}>{verification[index]}</span>
          </div>
        ))}
            <button style={back} onClick={()=>navigate(-1)}>Back to nikhilam</button>
      </div>
    
    </div>
  );
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
const input_class = {
fontSize:'large',
fontWeight:'bold',
color:'green',
marginLeft:'30px',
borderRadius:'25px',
textAlign:'center'
}
const back = {
marginLeft:'25%',
marginTop:'20px',
textDecoration:'none'
}
