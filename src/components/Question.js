import React from "react";
import Answers from "./Answers";

const Question = (props) => {
  const handleClick = (e) => {
    props.setdata(e.target.value);
  };
  return (
    <div className='question-component'>
      <h1>Choose Answer</h1>
      <div className='answers-container'>
        <Answers
          data={props.data}
          answers={props.question.incorrectAnswers}
          handler={handleClick}
        />
        <div className='next-btn-container'>
          <button
            onClick={() => props.handler(props.data)}
            className='next-btn'
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
