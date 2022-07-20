import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Btn from "../../components/Btn";

const Dashboard = () => {
  const navigate = useNavigate();
  let { score, questions } = useSelector((s) => s.quiz);
  return (
    <div className='result'>
      <h1>{` You have Answered ${Math.trunc(
        ((100 / questions.length) * score) / 10
      )} % of Questions `}</h1>
      <h1>Your Score : {score}</h1>

      <Btn
        handler={() => navigate("/review")}
        color='secondary'
        variant='contained'
        text='Browse Answers'
        style={{ minWidth: 120 }}
      />
      <a href='/'>
        <Btn
          variant='contained'
          color='secondary'
          style={{ minWidth: 120 }}
          text='Return To Main Menu'
        />
      </a>
    </div>
  );
};
export default Dashboard;
