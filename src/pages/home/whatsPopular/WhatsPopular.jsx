import { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTab from "../../../components/switchTab/SwitchTab";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

function WhatsPopular() {
  const [endPoint, setEndPoint] = useState("movie");
  const { data, loading } = useFetch(`/${endPoint}/popular`);

  const onTabChange = (tab) => {
    setEndPoint(tab === "Movies" ? "movie" : "tv");
  };
  return (
    <div className="carouselSelection">
      <ContentWrapper>
        <span className="carouselTitle">What's Popular</span>
        <SwitchTab onTabChange={onTabChange} data={["Movies", "Tv"]} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endPoint={endPoint} />
    </div>
  );
}

export default WhatsPopular;
