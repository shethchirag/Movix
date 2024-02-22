import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTab from "../../../components/switchTab/SwitchTab";

function Trending() {
  const onTabChange = (tab) => {};
  return (
    <div className="carouselSelection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTab onTabChange={onTabChange} data={["Day", "week"]} />
      </ContentWrapper>
    </div>
  );
}

export default Trending;
