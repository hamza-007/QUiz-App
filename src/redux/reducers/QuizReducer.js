import {
  ADD_CATEGORY,
  DEL_CATEGORY,
  SET_NBR,
  SET_DIFFICULTY,
  SET_QUERY,
  FETCH_START,
  FETCH_FAILURE,
  FETCH_SUCCES,
  SET_SCORE,
  ADD_ANSWERS,
} from "../constantes/Actions-Type";

const Quiz = {
  querystring: "categories=",
  categories: [],
  difficulty: "easy",
  questionsnumber: 1,
  questions: [],
  score: 0,
  isloading: false,
  error: null,
  answers: [],
};

const query_generator = (tab) => {
  let str = "";
  tab.map((item, key) => {
    key === 0 ? (str = str + item) : (str = str + "," + item);
  });
  return str;
};

const QuizReducer = (state = Quiz, action) => {
  switch (action.type) {
case ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    case DEL_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter((item) => item != action.payload),
      };
    case SET_NBR:
      return {
        ...state,
        questionsnumber: action.payload,
      };
    case SET_DIFFICULTY:
      return {
        ...state,
        difficulty: action.payload,
      };
    case SET_QUERY:
      return {
        ...state,
        querystring: state.querystring + query_generator(state.categories),
      };

    case FETCH_SUCCES:
      return {
        ...state,
        isloading: false,
        questions: action.payload,
      };
    case FETCH_START:
      return {
        ...state,
        isloading: true,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isloading: false,
        error: action.payload,
      };
    case SET_SCORE: {
      return {
        ...state,
        score: state.score + action.payload,
      };
    }
    case ADD_ANSWERS: {
      return {
        ...state,
        answers: [...state.answers, action.payload],
      };
    }
  }
  return state;
};

export default QuizReducer;
