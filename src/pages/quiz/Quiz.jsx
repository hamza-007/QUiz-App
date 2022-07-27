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
import Countdown from "react-countdown";
import Alert from "../../components/Alert";

const Quiz = () => {
  const [current, setcurrent] = useState(0);
  const [data, setdata] = useState("");
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
    setdata("");
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
              <img
                src={`/assets/${questions[0].category}.jpeg`}
                width={"250px"}
                height={"150px"}
              />
              <div className='question-details'>
                <h1>
                  Question {current + 1}/{questions.length}
                </h1>
                <h1>{questions[current].question}</h1>
              </div>
            </div>
            <div>
              <Question
                data={data}
                setdata={setdata}
                question={questions[current]}
                handler={handleNext}
              />
            </div>
          </div>
        )
      )}
    </div>
  );
};
export default Quiz;
