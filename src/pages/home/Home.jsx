import React from "react";
import "./home.css";
import data from "../../data";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { set_query } from "../../redux/actions/QuizActions";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (item) => {
    dispatch(set_query(item.value));
    navigate(`/start/${item.name}`);
  };
  return (
    <div className='select-topic'>
      <h1>select topic </h1>
      <h5>featured category</h5>
      <div className='categories'>
        {data &&
          data.map((item, key) => (
            <div className='category' key={key}>
              <img
                src={`/assets/${item.name}.jpeg`}
                alt={item.name}
                width={"200px"}
                height={"150px"}
                onClick={() => handleClick(item)}
              />
              <h6>{item.name}</h6>
            </div>
          ))}
      </div>
      <button className='more-categories'>More</button>
    </div>
  );
};

export default Home;
