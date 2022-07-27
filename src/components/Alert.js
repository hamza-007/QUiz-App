import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggle_modal } from "../redux/actions/QuizActions";
import "./Alert.css";

export default function Alert() {
  let { modal } = useSelector((s) => s.quiz);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleModal = () => {
    dispatch(toggle_modal());
    navigate("/");
  };

  const handleReview = () => {
    dispatch(toggle_modal());
    navigate("/review");
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content'>
            <h2>Congratulations ! </h2>
            <p>You have Passed Quiz with 80%</p>
            <button className='review-btn' onClick={handleReview}>
              Review Quiz
            </button>
            <button className='close-modal' onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}
