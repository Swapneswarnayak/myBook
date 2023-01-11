import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import MailIcon from "@mui/icons-material/Mail";
import "./Navbar.css";
import { Badge } from "@mui/material";
const Navbar = () => {
  return (
    <div id="nav">
      <div id="logo">
        <img
          style={{ width: "30%" }}
          src="./assets/ebf84f90d33d4481933624bf186c5804 (1).png"
          alt=""
        />
      </div>
      <div id="profile_section">
        <Badge badgeContent={4} color="success">
          <MailIcon color="action" />
        </Badge>
        <MessageRoundedIcon />
        <NotificationsActiveRoundedIcon />
        <AccountCircleRoundedIcon />
      </div>
    </div>
  );
};

export default Navbar;
