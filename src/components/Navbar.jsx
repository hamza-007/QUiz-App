import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { checkUser } from "../context/userContext";

export default function Navbar() {
  let user = checkUser();
  return (
    <div className='navbar'>
      <a href='/'>
        <h1>Quiz Time</h1>
      </a>
      <div className='search__section'>
        <SearchIcon />
        <input
          type='search'
          placeholder='Search...'
          className='navbar__search'
        />
      </div>

      <button className='navbar__button'>start quiz</button>
      <div>{user ? <h1>{user}</h1> : ""}</div>
    </div>
  );
}
