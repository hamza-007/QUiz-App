import React, { useState } from "react";
import Answers from "./Answers";

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
         <Answers key={key} id={key} data={answer} handler={handleClick} />
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
