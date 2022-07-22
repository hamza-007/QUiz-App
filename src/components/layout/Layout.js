import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Quiz, Result, Review } from "../../pages";
import Navbar from "../Navbar";
import SideBar from "../SideBar";
const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />
        <SideBar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/result' element={<Result />} />
        <Route path='/review' element={<Review />} />
      </Routes>
    </>
  );
};

export default Layout;
