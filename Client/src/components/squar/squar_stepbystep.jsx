import React from 'react';
import { useNavigate } from 'react-router-dom';

const equations = [
  {
    number: '593',
    qno:'1',
    steps: [
      { d: 3, value: 9, column2: 539, column3: 9 },
      { d: 93, value: 54, column2: 539, column3: 49+"(carry=5)" },
      { d: 593, value: 111, column2: 539, column3: 649+"(carry=11)" },
      { d: 59, value: 90, column2: 539, column3: 1649+"(carry=10)" },
      { d: 5, value: 25, column2: 539, column3: 351649 },
    ],
  },
  { 
    number: '7461',
    qno:'2',
    steps: [
      { d: 2, value: 4, column2: 74612, column3: 4 },
      { d: 12, value: 4, column2: 74612, column3: 44 },
      { d: 612, value: 25, column2: 74612, column3: 544 +"(carry=2)"},
      { d: 4612, value: 28, column2: 74612, column3:"0"+544+"(carry=3)" },
      { d: 74612, value: 72, column2: 74612, column3: 50544+"(carry=7)" },
      { d: 7461, value: 62, column2: 74612, column3: 950544+"(carry=6)" },
      { d: 746, value: 100, column2: 74612, column3: 6950544+"(carry=10)" },
      { d: 74, value: 56, column2: 746122, column3: 66950544 +"(carry=6)"},
      { d: 7, value: 49, column2: 74612, column3: 5566950544 },
    ],
  },
  {
    number: '327.8',
    qno:'3',
    steps: [
      { d: 8, value: 64, column2: 3278, column3: 4+"(carry=6)" },
      { d: 78, value: 112, column2: 3278, column3: 84+"(carry=11)" },
      { d: 278, value: 81, column2: 3278, column3: 284+"(carry=9)" },
      { d: 3278, value: 76, column2: 3278, column3: 5284+"(carry=8)" },
      { d: 327, value: 46, column2: 3278, column3: 45284+"(carry=5)" },
      { d: 32, value: 12, column2: 3278, column3: 745284+"(carry=1)" },
      { d: 3, value: 9, column2: 3278, column3: 10745284 },
    ],
    decimalPoint: 2,
  },
  {
    number: '31',
    qno:'4',
    steps: [
      { d: 1, value: 1, column2: 31, column3: 1 },
      { d: 31, value: 6, column2: 31, column3: 61 },
      { d: 3, value: 9, column2: 31, column3: 961 },
    ],
  },
  {
    number: '961',
    qno:'5',
    steps:[
        
            {d:1,value:1,column2:961,column3:1},
            {d:1,value:1,column2:961,column3:21+"(carry=1)"},
            {d:1,value:1,column2:961,column3:521+"(carry=5)"},
            {d:1,value:1,column2:961,column3:3521+"(carry=11)"},
            {d:1,value:1,column2:961,column3:923521}
       
    ],
  },
];

function Squar_stepbystep() {
    const navigate=useNavigate();
  return (
    <div>
    <h1 style={title}>Solutions for the exercise</h1>
    <hr/>
      {equations.map((equation, index) => (
        <div key={index} style={{'font-size':'x-large'}}>
            <h4>{equation.qno}){" "+equation.number}<sup>2</sup></h4>
            {equation.number=='327.8'?<p>We can calculate the square of 3278 and then place a decimal point two positions from the right</p>:""}
          <table style={tableStyle}>
            <tbody>
              <tr>
                <td style={numberStyle}>{equation.number}<sup>2</sup></td>
                <td style={columnStyle}>
                  {equation.steps.map((step, stepIndex) => (
                    <div key={stepIndex} style={stepStyle}>
                      D({step.d}) = {step.value}
                    </div>
                  ))}
                </td>
                <td style={columnStyle}>
                  {equation.steps.map((step, stepIndex) => (
                    <div key={stepIndex} style={stepStyle}>
                      {step.column2}<sup>2</sup>=
                    </div>
                  ))}
                </td>
                <td style={columnStyle}>
                  {equation.steps.map((step, stepIndex) => (
                    <div key={stepIndex} style={stepStyle}>
                      {step.column3}
                    </div>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
          {equation.number=='327.8' ? <p>What we require is 327.82 . Hence place a decimal point two positions from the right. So, 327.8<sup>2</sup> =<b>107452.84</b> </p> : ""}
          {index < equations.length - 1 && <hr style={separatorStyle} />}
        </div>
      ))}
      <div style={buttonstyle}>
      <button  onClick={()=>navigate(-1)}>Back to exercise</button>
      </div>
    </div>
  );
}

const tableStyle = {
  borderCollapse: 'collapse',
  marginLeft:'20px'
};

const numberStyle = {
  fontFamily: 'Arial, sans-serif',
  fontSize: '16px',
  fontWeight: 'bold',
  padding: '10px',
  borderRight: '1px solid #000',
  fontSize:'x-large'
};

const columnStyle = {
  borderRight: '1px solid #000',

};

const stepStyle = {
  fontFamily: 'Arial, sans-serif',
  fontSize: '16px',
  padding: '10px',
  borderBottom: '1px solid #ccc',
  marginBottom: '5px',
  fontSize:'x-large'
};

const separatorStyle = {
  borderTop: '2px solid red',
  marginTop: '20px',
};
const buttonstyle = {
   textAlign:'center',
    marginTop:'20px'
}
const title = {
  color:'green',
  textAlign:'center'
}
export default Squar_stepbystep;
