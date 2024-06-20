import React from 'react';
export default function Intro() {
  return (
    <div>
      <div className="body">
        <h2 style={title}>Introduction to division:</h2>
        <hr/>
        <p>Division is one aspect of arithmetic that is regarded to be very important and equally cumbersome.</p>
        <h3>Take for example 52 ÷ 9:</h3>
        <p>Doing this by the conventional technique involves going through the 9's tables mentally, until 9 × 5 = 45.</p>
        <p>Then subtracting 45 from 52 to obtain 7 as the remainder and 5 as the quotient.</p>
        <br />
        <p>How about 200165 ÷ 8987? Such problems would give nightmares to many.</p>
        <p>Is there an easier and more elegant way for division?</p>
      </div>
    </div>
  );
}

const title={
  marginLeft:'40%'
}
