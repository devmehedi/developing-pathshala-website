import React from "react";
import "./Home.css";
import HomeServices from "./HomeServices/HomeServices";
import TopBanner from "./TopBanner/TopBanner";
const Home = () => {
  return (
    <div>
      <TopBanner></TopBanner>
      <HomeServices></HomeServices>
    </div>
  );
};

export default Home;
