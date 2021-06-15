import React from "react";
import Banner from "../components/Banner";
import Acard from "../components/Acard";
import "./Home.css";
import { Button } from "@material-ui/core";
//home2 home 3 home 5
const Home = () => {
  return (
    <div>
      <Button color="primary">Hello World</Button>
      <Button color="secondary">Hello World</Button>
      <Button color="danger">Hello World</Button>
      <Banner />
      <div className="home__card">
        <Acard />
        <Acard />
        <Acard />
        <Acard />
      </div>
    </div>
  );
};

export default Home;
