import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../division/nik_div.css"


const questions = [
    { id: 1, question: "1. Find the square of 593 ", answer: 351649 },
    { id: 2, question: "2.Find the square of 74612", answer:   5566950544 },
    { id: 3, question: "3.Find the square of 327.8", answer: 107452.84 },
    { id: 4, question: "4.Find the fourth power of 31", answer: 923521 },
  ];
  

export default function Try_pv() {
    
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
    <div className="body">
      <h2 className="main_heading">Try the following problems!</h2>
      <hr/>

      <div className="question_block">
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
    <button style={verify_button}onClick={() => handleVerify(index)}>
      Verify
    </button>
    <span style={verification[index] === "Correct" || verification[index] === "give it a try!" ? { 'color': 'green' } : { 'color': 'red' }}>{verification[index]}</span>
  </div>
))} 
        <h4>Here you go for the step by step solution for above questions!</h4>
        <div style={buttonstyle}>
        <button><NavLink to="/squar/squar_stepbystep">Click here!</NavLink></button>
            </div>
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
const buttonstyle={
  textAlign:'center'
}