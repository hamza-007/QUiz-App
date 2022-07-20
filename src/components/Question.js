import React from "react";
import Btn from "./Btn";
const Question = (props) => {
  return (
    <div>
      <h3>{props.question.question}</h3>
      {props.question.incorrectAnswers.map((answer, key) => (
        <div key={key}>
          <Btn
            style={{ minWidth: 120 }}
            color='secondary'
            variant='outlined'
            handler={() => {
              props.handler(answer);
            }}
            text={answer}
          />
        </div>
      ))}
    </div>
  );
};

export default Question;
