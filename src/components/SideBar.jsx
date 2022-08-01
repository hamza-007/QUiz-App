import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/UserActions";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    navigate("/login");
    dispatch(logout());
  };
  return (
    <div className='sidebar'>
      <ul>
        <li>
          <DashboardIcon /> Dashboard
        </li>
        <li>
          <SupportAgentIcon /> Support
        </li>
        <li>
          <NotificationsIcon /> Notification
        </li>
      </ul>
      <div className='logout__icon'>
        <button className='logout__button' onClick={handleLogout}>
          <LogoutIcon />
          <h2>Log out</h2>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
