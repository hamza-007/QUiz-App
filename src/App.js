import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import {
  Home,
  Login_section,
  Questions,
  Result,
  QuestionReview,
  SignUpPage,
} from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path='/quiz'
            element={
              <ProtectedRoute>
                <Questions />
              </ProtectedRoute>
            }
          />
          <Route
            path='/result'
            element={
              <ProtectedRoute>
                <Result />
              </ProtectedRoute>
            }
          />
          <Route
            path='/review'
            element={
              <ProtectedRoute>
                <QuestionReview />
              </ProtectedRoute>
            }
          />
          <Route path='/login' element={<Login_section />} />
          <Route path='/sign-up' element={<SignUpPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
