import React, { useCallback } from "react";
import Countdown from "react-countdown";
import { useSelector } from "react-redux";
import Answers from "./Answers";

const Question = (props) => {
  let { questions } = useSelector((s) => s.quiz);
  const handleClick = useCallback((e) => {
    props.setdata(e.target.value);
  }, []);

  return (
    <div className='question-component'>
      <div className='question-section'>
        <div className='question-section-header'>
          <div>
            <h1>{questions[0].category} Quiz</h1>
            <h6>Answer The Questions Below</h6>
          </div>
          <div className='timer'>
            <h1>
              <Countdown date={Date.now() + 60000 * 30} />
              Mins
            </h1>
          </div>
        </div>
        <div className='question-section-image'>
          <img src={props.img} width={"250px"} height={"150px"} />
          <div className='question-details'>
            <h1>
              Question {props.id + 1}/{questions.length}
            </h1>
            <h1>{questions[props.id].question}</h1>
          </div>
        </div>
        <div>
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
      </div>
    </div>
  );
};

export default React.memo(Question);
