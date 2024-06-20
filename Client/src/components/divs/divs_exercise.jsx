import React, { useState } from 'react';
import "../division/nik_div.css"
const Questions = [
  { no:'1',
    question: 'Is 4008 divisible by 13?',
    answer: 'No'
  },
  { no:'2',
    question: 'Determine if 2369 is divisible by 23.',
    answer: 'Yes'
  },
  { no:'3',
    question: 'Determine if 15167 is divisible by 29.',
    answer: 'Yes'
  },
  { no:'4',
    question: 'Using Negative Ekadhika find if 51 divides 18469 without leaving any remainders.',
    answer: 'No'
  },
  {    no:'5',
    question: 'Determine if 34282 is an integral multiple of 61.',
    answer: 'Yes'
  }
];

const Divs_exercise = () => {
  const [userAnswers, setUserAnswers] = useState(Array(Questions.length).fill(null));

  const handleAnswerClick = (index, answer) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = answer;
    setUserAnswers(newAnswers);
  };

  return (
    <div className='body'>
    <h3 style={title}>Try these out!⬇️</h3>
      {Questions.map((question, index) => (
        <div key={index}>
          <p>{question.no}){question.question}</p>
          <button style={answerbutton}onClick={() => handleAnswerClick(index, 'Yes')}>Yes</button>
          <button style={answerbutton}onClick={() => handleAnswerClick(index, 'No')}>No</button>
          {userAnswers[index] !== null && (
            <p style={userAnswers[index]===question.answer?{'color':'green','font-size':'xx-large'}:{'color':'red','font-size':'xx-large'}}><span style={answerindicator}>Answer:</span>{userAnswers[index] === question.answer ? '🟢Correct!' : '❌Wrong!'}</p>
          )}
        </div>
      ))}
    </div>
  );
};
const answerstyle={
    color:'green'
}
const topcontainer={
    fontSize:'x-large',
    marginLeft:'230px',
    marginBottom:'100px'

}
const answerbutton={
    borderRadius:'20px',
    marginRight:'20px',
    marginTop:'0px',
    marginBottom:'10px',
    width:'180px'
}
const answerindicator = {
    color:'black',
    textDecoration:'none'
}
export default Divs_exercise;

const title={
  marginLeft:'40%'
}