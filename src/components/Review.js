import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import Btn from "./Btn";
import { useNavigate } from "react-router-dom";

const Review = () => {
  const navigate = useNavigate();
  const [current, setcurrent] = useState(0);
  let { answers, questions } = useSelector((s) => s.quiz);

  const HandleClick = () => {
    let nextQuestion = current + 1;
    if (nextQuestion <= answers.length) {
      setcurrent((prev) => ++prev);
      if (nextQuestion === answers.length) {
        navigate("/result");
      }
    }
  };
  return (
    <div className='review'>
      <div>
        <h3>
          Question {current + 1} / {questions.length}
        </h3>
        <h2>{questions[current] && questions[current].question}</h2>
        <div className='review-section'>
          {questions[current] &&
            questions[current].incorrectAnswers.map((answer, key) => (
              <div key={key} className='question-review'>
                <h3>{answer}</h3>
                {answer === questions[current].correctAnswer ? (
                  <h4>correct answer</h4>
                ) : answers.find((itm) => itm === answer) ? (
                  <h4>Your answer</h4>
                ) : (
                  ""
                )}
              </div>
            ))}
        </div>
        <Btn color='secondary' handler={HandleClick} text="Next Question" variant='outlined' />
          
      </div>
    </div>
  );
};

export default Review;
