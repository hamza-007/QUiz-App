import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  add_answer,
  fetch_data,
  set_score,
  toggle_modal,
} from "../../redux/actions/QuizActions";
import Spinner from "../../components/Spinner";
import Question from "../../components/Question";
import Alert from "../../components/Alert";

const Quiz = () => {
  console.log("quiz page re-rendered");
  const [current, setcurrent] = useState(0);

  const { questions, error, isloading } = useSelector((s) => s.quiz);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_data());
  }, []);

  const handleNext = (answer) => {
    dispatch(add_answer(answer));
    let nextQuestion = current + 1;
    if (answer === questions[current].correctAnswer) {
      dispatch(set_score(10));
    }
    if (nextQuestion <= questions.length) {
      setcurrent((prev) => ++prev);
      if (nextQuestion === questions.length) {
        dispatch(toggle_modal());
      }
    }
  };

  return (
    <div className='questions'>
      <Alert />
      {isloading ? (
        <div>
          <Spinner color='secondary' />
        </div>
      ) : error !== null ? (
        <h1>{error}</h1>
      ) : (
        questions[current] && (
          <Question
            img={`/assets/${questions[0].category}.jpeg`}
            question={questions[current]}
            handler={handleNext}
            id={current}
          />
        )
      )}
    </div>
  );
};
export default React.memo(Quiz);
