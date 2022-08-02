import { createContext } from "react";

export const initialState = {
  islogged: false,
  email: "",
  password: "",
  error: null,
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      if (login(action.payload.email, action.payload.password)) {
        window.localStorage.setItem("user", action.payload.email);
        return {
          ...state,
          islogged: true,
          email: action.payload.email,
          password: action.payload.password,
        };
      } else
        return {
          ...state,
          islogged: false,
          email: "",
          password: "",
          error: "incorrect email or password  ",
        };
    case "LOGOUT":
      window.localStorage.clear();
      return {
        ...state,
        islogged: false,
        email: "",
        password: "",
      };
  }
  return state;
};

export const userContext = createContext(initialState);

const login = (email, password) => {
  if (window.localStorage.getItem("user")) {
    return true;
  }
  if (email !== "admin" || password !== "admin") {
    return false;
  }
  return true;
};

export const checkUser = () => {
  return window.localStorage.getItem("user");
};
