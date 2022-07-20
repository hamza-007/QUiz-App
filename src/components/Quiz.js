import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_answer, set_score } from "../redux/actions/QuizActions";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import Question from "./Question";

const Quiz = () => {
  const [current, setcurrent] = useState(0);
  const { questions, error, isloading } = useSelector((s) => s.quiz);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (answer) => {
    let nextQuestion = current + 1;
    if (nextQuestion <= questions.length) {
      dispatch(add_answer(answer));
      if (answer === questions[current].correctAnswer) {
        dispatch(set_score(10));
      }
      setcurrent((prev) => ++prev);
      if (nextQuestion === questions.length) {
        navigate("/result");
      }
    }
  };

  return (
    <div className='questions'>
      {isloading ? (
        <div>
          <Spinner color='secondary' />
        </div>
      ) : error !== null ? (
        <h1>{error}</h1>
      ) : (
        questions[current] && (
          <div>
            <h4>
              Question {current + 1}/{questions.length}
            </h4>
            <Question question={questions[current]} handler={handleClick} />
          </div>
        )
      )}
    </div>
  );
};
export default Quiz;
