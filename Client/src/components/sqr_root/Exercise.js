import React,{useState} from 'react'
import '../division/nik_div.css';
import { useNavigate } from "react-router-dom";
import book from '../../images/ex_book.gif'

const questions_set_1=[
    { id:1,question:'1)4624',answer:68},
    { id:2,question:'2)201601',answer:449},
    { id:3,question:'3)966289',answer:983},
    { id:4,question:'4)12020089',answer:3467},
    { id:5,question:'5)9245207104',answer:96152}
];


const Exercise = () => {
    const navigate=useNavigate();    
    const [answers,setAnswers]= useState(Array(5).fill(""));
    const [verifications, setVerification] = useState(Array(5).fill("give it a try!"));

    function handleChange(event,index)
    {
    const new_answers=[...answers];
    new_answers[index]=event.target.value;
    setAnswers(new_answers);
    }
    function handleShow(index) {
        const correct_answers = [...answers];
        correct_answers[index] = questions_set_1[index].answer;
        setAnswers(correct_answers);
    }
    function handleVerify(index) {
        const isCorrect = parseInt(answers[index]) === questions_set_1[index].answer;
        const newVerification = [...verifications];
        newVerification[index] = isCorrect ? "Correct" : "Wrong";
        setVerification(newVerification);
    }

  return (
    <div class='body'>
    <h3 style={title}>EXERCISES</h3>
    <hr/>
    <p><img src={book}/>Practice makes a person perfect! Why don't you practice with these questions!</p>
    <h4>Q1) Find the square root of the following   perfect squares-use mishrank wherever necessary:</h4>
    {questions_set_1.map((q,index) => (
        <div id={q.id}>
        <p>{q.question}</p>
        <input class='input_sq_rt' type='text' style={input_class}
        onChange={(e) => handleChange(e, index)} value={answers[index]}/>&nbsp;&nbsp;
        <button type='show_button' onClick={()=>handleShow(index)}>SHOW ANSWERS</button>&nbsp;&nbsp;
        <button type='verify_button' onClick={()=>handleVerify(index)}>VERIFY ANSWERS</button>&nbsp;&nbsp;
        <span className="try_span" style={verifications[index]=== "Wrong" ? {'color':'red'}:{'color':'green'}}>
            {verifications[index]}
        </span>
        </div>
        ))}
        <br/>
        <br/>
        <button style={{'margin-left':'30%'}}onClick ={()=>navigate('/squar_root/exer_2')}>WANNA PRACTICE MORE PROBLEMS? CLICK HERE</button>
        <br/>
        <hr/>
    </div>
  )
}

export default Exercise

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