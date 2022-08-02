import React from "react";
import "./App.css";
import Router from "./navigation/Router";
import UserProvider from "./context/userContext";

const App = () => {
  return (
    <UserProvider>
      <div className='App'>
        <Router />
      </div>
    </UserProvider>
  );
};

export default App;
