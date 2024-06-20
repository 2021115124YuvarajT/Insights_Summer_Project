import React,{useState} from 'react'
import '../division/nik_div.css';
import { useNavigate } from "react-router-dom";
import book from '../../images/ex_book.gif'

const questions_set_1=[
    { id:1,question:'1)61',answer:226981},
    { id:2,question:'2)43',answer:79507},
    { id:3,question:'3)36',answer:46656},
    { id:4,question:'4)25',answer:15625},
    { id:5,question:'5)97',answer:912673},  
];
const questions_set_2=[
    { id:1,question:'1)29',answer:24389},
    { id:2,question:'2)57',answer:185193},
    { id:3,question:'3)22',answer:10648},
    { id:4,question:'4)38',answer:54872},
    { id:5,question:'5)66',answer:287496},
];
const Misc_ex = () => {
    const navigate=useNavigate();    
    const [answers,setAnswers]= useState(Array(5).fill(""));
    const [verifications, setVerification] = useState(Array(5).fill("give it a try!"));

    function handleChange(event,index)
    {
    const new_answers=[...answers];
    new_answers[index]=event.target.value;
    setAnswers(new_answers);
    }
    function handleShow(index,questions_set_1) {
        const correct_answers = [...answers];
        correct_answers[index] = questions_set_1[index].answer;
        setAnswers(correct_answers);
    }
    function handleVerify(index,questions_set_1) {
        const isCorrect = parseInt(answers[index]) === questions_set_1[index].answer;
        const newVerification = [...verifications];
        newVerification[index] = isCorrect ? "Correct" : "Wrong";
        setVerification(newVerification);
    }
  return (
    <div class='body'>
        <h3 class='main_heading'> TRY OUT THESE QUESTIONS </h3>
        <hr/>
        <img src={book}/>
        <span>Here are some questions for your practice</span>
        <p>1. Cube the following numbers:</p>
        {questions_set_1.map((q,index) => (
        <div id={q.id}>
        <p>{q.question}</p>
        <input class='input_cube1' placeholder='enter the cube' type='text' onChange={(e) => handleChange(e, index)} value={answers[index]}/>&nbsp;&nbsp;
        <button type='show_button' onClick={()=>handleShow(index,questions_set_1)}>SHOW ANSWERS</button>&nbsp;&nbsp;
        <button type='verify_button' onClick={()=>handleVerify(index,questions_set_1)}>VERIFY ANSWERS</button>&nbsp;&nbsp;
        <span className="try_span" style={verifications[index]=== "Wrong" ? {'color':'red'}:{'color':'green'}}>
            {verifications[index]}
        </span>
        </div>
        ))}
        <br/>
        <hr/>
        <p>2. Cube the following (use mishrank if necessary)</p>
        {questions_set_2.map((q,index) => (
        <div id={q.id}>
        <p>{q.question}</p>
        <input class='input_cube2' placeholder='enter the cube' type='text' onChange={(e) => handleChange(e, index)} value={answers[index]}/>&nbsp;&nbsp;
        <button type='show_button' onClick={()=>handleShow(index,questions_set_2)}>SHOW ANSWERS</button>&nbsp;&nbsp;
        <button type='verify_button' onClick={()=>handleVerify(index,questions_set_2)}>VERIFY ANSWERS</button>&nbsp;&nbsp;
        <span className="try_span" style={verifications[index]=== "Wrong" ? {'color':'red'}:{'color':'green'}}>
            {verifications[index]}
        </span>
        </div>
        ))}
        <br/>
        <hr/>
        <br/>
        <h3><span><img src={book}/></span>Here are some more questions that you can think about :</h3>
        <p>1. We related the method of cubing to the expansion of (a+b)3. 
            Given that (a+b)4 = a4 + 4 a3b + 6 a2b2 + 4 ab3 + b4, can you devise a method for finding the fourth power of a number? 
            Can you extend it to any nth power? Take the help of the binomial theorem. 
            (In the case of unfamiliarity with binomial theorem, it is left as a learning exercise.)
        </p>
        <p>2. In the method discussed, what happens when both the digits of the given number are the same? 
            Can you simplify the method for this special case, so that it can be faster?
        </p>
        <p>3. How can this method be extended to numbers with more than 2 digits?</p>
        <br/>
        <button style={{'margin-left':'25%'}}onClick ={()=>navigate('/misc')}>BACK TO BASICS</button>
    </div>
  )
}

export default Misc_ex

const title={
    marginLeft:'40%'
  }