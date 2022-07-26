import React, { useState } from "react";

const Question = (props) => {
  const [data, setdata] = useState("");
  const handleClick = (e) => {
    setdata(e.target.value)
  };
  return (
    <div className='question-component'>
      <h1>Choose Answer</h1>
      <div className='answers-container'>
        {props.question.incorrectAnswers.map((answer, key) => (
          <div key={key} className='question-answers'>
            <input type={"radio"} checked name='answer' onChange={handleClick} value={answer} />
            <h2> {answer} </h2>
          </div>
        ))}

        <div className='next-btn-container'>
          <button onClick={ ()=> props.handler(data)} className='next-btn'>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
