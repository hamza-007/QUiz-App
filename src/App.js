import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { Layout } from "./components";
import {
  Home,
  Result,
  Login,
  SignUpPage,
  Quiz,
  Review,
} from "./pages";
const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Layout>
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
                  <Quiz />
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
                  <Review />
                </ProtectedRoute>
              }
            />
            <Route path='/login' element={<Login />} />
            <Route path='/sign-up' element={<SignUpPage />} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
};

export default App;
