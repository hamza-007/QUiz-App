import React, { useReducer } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { Layout } from "./components";
import { Login } from "./pages";
import { initialState, userContext, userReducer } from "./context/userContext";

const App = () => {
  const [user, userdispatcher] = useReducer(userReducer, initialState);

  return (
    <BrowserRouter>
      <userContext.Provider value={{ user, userdispatcher }}>
        <div className='App'>
          <Routes>
            <Route
              path='*'
              element={
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              }
            />

            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </userContext.Provider>
    </BrowserRouter>
  );
};

export default App;
