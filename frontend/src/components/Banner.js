import React, { useState } from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import DatePickerShow from "./DatePickerShow";
import { Link } from "react-router-dom";
const Banner = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <DatePickerShow />}

        <Button
          variant="outlined"
          className="banner__serach__button"
          onClick={() => {
            setShowSearch(!showSearch);
          }}
        >
          Search Date
        </Button>
      </div>
      <div className="banner__info">
        <h1>Go out and be more productive</h1>
        <h5>find other like-mind people with similar jobs to work around</h5>
        <Button variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
};

export default Banner;
