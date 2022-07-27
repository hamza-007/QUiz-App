import React from "react";

const Answers = ({ answers, handler, data }) => {
  return (
    <div className='answers-container'>
      {answers.map((answer, key) => (
        <div key={key} className='question-answers'>
          <input
            type={"radio"}
            name={"answer"}
            checked={data === answer}
            onChange={handler}
            value={answer}
          />
          <h2> {answer} </h2>
        </div>
      ))}
    </div>
  );
};

export default Answers;
