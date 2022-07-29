import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../../components/Spinner";
import Question from "../../components/Question";
import Alert from "../../components/Alert";
import Countdown from "react-countdown";

const Quiz = () => {
  const { questions, error, isloading } = useSelector((s) => s.quiz);

  const renderContent = () => {
    if (isloading || !questions)
      return (
        <div>
          <Spinner color='secondary' />
        </div>
      );

    if (error) return <h1>{error}</h1>;

    return (
      <>
        <div className='timer'>
          <h1>
            <Countdown date={Date.now() + 60000 * 30} />
            Mins
          </h1>
        </div>
        <Alert />
        <Question
          img={`/assets/${questions[0]?.category}.jpeg`}
          questions={questions}
        />
      </>
    );
  };

  return <div className='questions'>{renderContent()}</div>;
};
export default React.memo(Quiz);
