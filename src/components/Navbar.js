import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useAuth } from "../hooks/useAuth";
import { logout } from "../redux/actions/UserActions";
export default function Navbar() {
  let user = useAuth();
  const dispatch = useDispatch();
  return (
    <div className='navbar'>
      <AppBar position='sticky' color='secondary' className='appbar'>
        <Toolbar className='tool'>
          <div>
            <a href='/'>
              <Typography className='typ' variant='h5'>
                Trivia Quiz
              </Typography>
            </a>
          </div>
          <div className='login_stat'>
            {user ? (
              <a
                style={{ color: "white" }}
                href='/'
                onClick={() => dispatch(logout())}
              >
                Logout
              </a>
            ) : (
              ""
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
