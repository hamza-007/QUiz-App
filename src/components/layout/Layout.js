import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Review, Quiz, Result } from "../../pages";
import Navbar from "../Navbar";
const Layout = () => {
  return (
    <>
      <div>
        <Navbar />
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
