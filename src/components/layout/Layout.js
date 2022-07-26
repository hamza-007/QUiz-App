import React from "react";
import {  Route, Routes } from "react-router-dom";
import { Home, Quiz, Result, Review , Start } from "../../pages";
import Navbar from "../Navbar";
import SideBar from "../SideBar";
const Layout = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="main-section">
        <SideBar />
        <div className="content-section">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/result' element={<Result />} />
          <Route path='/review' element={<Review />} />
          <Route path='/start/:category' element={<Start />} />
        </Routes>

        </div>
      </div>
    </>
  );
};

export default Layout;
