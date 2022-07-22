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
        
          <Routes>
            <Route
              path='/'
              element={
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              }
            />
            
            <Route path='/login' element={<Login />} />
            <Route path='/sign-up' element={<SignUpPage />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
