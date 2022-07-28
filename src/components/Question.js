import React, { useCallback, useState } from "react";
import Countdown from "react-countdown";
import { useSelector } from "react-redux";
import Answers from "./Answers";
import PropTypes from "prop-types";



const Question = ({ img,question, handler, id }) => {
  console.log("question component re-rendred");
  const [data, setdata] = useState("");
  let { questions } = useSelector((s) => s.quiz);
  const handleClick = useCallback((e) => {
    setdata(e.target.value);
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
          <img src={img} width={"250px"} height={"150px"} />
          <div className='question-details'>
            <h1>
              Question {id + 1}/{questions.length}
            </h1>
            <h1>{questions[id].question}</h1>
          </div>
        </div>
        <div>
          <h1>Choose Answer</h1>
          <div className='answers-container'>
            <Answers
              data={data}
              answers={question.incorrectAnswers}
              handler={handleClick}
              />
            <div className='next-btn-container'>
              <button onClick={() => handler(data)} className='next-btn'>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Question.propTypes = {
  img:      PropTypes.string,
  question: PropTypes.object,
  handler:  PropTypes.func,
  id:       PropTypes.number,
};

export default React.memo(Question);
