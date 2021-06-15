import React from "react";
import logo from "../Log.png";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <Link to="/">
          <img className="header__icon" src={logo} alt="logo" />
        </Link>
      </IconButton>

      <div className="header__center">
        <input type="text" placeholder="search an office" />
        <SearchIcon />
      </div>
      <div className="header__right">
        <IconButton>
          <p> Host</p>
        </IconButton>
        <IconButton>
          <LanguageIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>

        <IconButton>
          <Avatar component={Link} to="login" />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
