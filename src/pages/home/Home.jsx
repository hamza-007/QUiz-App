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
    dispatch(set_query(item.value))
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

// import React from "react";
// import Btn from "../../components/Btn";
// import {
//   set_questions_number,
//   set_query,
//   fetch_data,
//   add_category,
//   delete_category,
//   set_difficulty,
// } from "../../redux/actions/QuizActions";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import NumberSlider from "../../components/NumberSlider";
// import Checkbox from "@mui/material/Checkbox";
// import data from "../../data";
// import SelectInput from "../../components/SelectInput";

// const Home = () => {
//   let { nbr, diff } = useSelector((s) => ({
//     nbr: s.quiz.questionsnumber,
//     diff: s.quiz.difficulty,
//   }));

//   let dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSubmit = () => {
//     dispatch(set_query());
//     dispatch(fetch_data());
//     navigate("/quiz");
//   };

//   const handleNbr = (e) => {
//     dispatch(set_questions_number(e.target.value));
//   };

//   const HandleDifficulty = (e) => {
//     dispatch(set_difficulty(e.target.value));
//   };

//   const handleCheck = (item, e) => {
//     let isChecked = e.target.checked;
//     if (isChecked) {
//       dispatch(add_category(item));
//     } else {
//       dispatch(delete_category(item));
//     }
//   };
//   return (
//     <div className='form'>
//       <SelectInput
//         title='categories'
//         options={data}
//         itemHandler={handleCheck}
//         customItem={Checkbox}
//         color='secondary'
//         style={{ minWidth: 200 }}
//         itemStyle={{
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "spaceBetween",
//         }}
//       />
//       <SelectInput
//         title='difficulty'
//         options={[
//           {
//             name: "Easy",
//             value: "easy",
//           },
//           {
//             name: "Medium",
//             value: "medium",
//           },
//           {
//             name: "Hard",
//             value: "hard",
//           },
//         ]}
//         style={{ minWidth: 200 }}
//         value={diff}
//         onSelect={(e) => HandleDifficulty(e)}
//         color='secondary'
//       />

//       <NumberSlider
//         handler={handleNbr}
//         min={1}
//         max={20}
//         style={{ minWidth: 120 }}
//         data={nbr}
//       />

//       <Btn
//         color='secondary'
//         style={{ minWidth: 200 }}
//         handler={handleSubmit}
//         variant='contained'
//         text='Submit'
//       />
//     </div>
//   );
// };
// export default Home;
