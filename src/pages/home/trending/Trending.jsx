import { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTab from "../../../components/switchTab/SwitchTab";
import useFetch from "./../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

function Trending() {
  const [endPoint, setEndPoint] = useState("day");
  const { data, loading } = useFetch(`/trending/all/${endPoint}`);

  const onTabChange = (tab) => {
    setEndPoint(tab === "Day" ? "day" : "week");
  };
  return (
    <div className="carouselSelection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTab onTabChange={onTabChange} data={["Day", "Week"]} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
}

export default Trending;
