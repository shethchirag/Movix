import React from "react";
import "./style.scss";
import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import WhatsPopular from "./whatsPopular/WhatsPopular";
import TopRated from "./topRated/TopRated";

function Home() {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <WhatsPopular />
      <TopRated />
    </div>
  );
}

export default Home;
