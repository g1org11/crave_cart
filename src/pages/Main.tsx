import { useState, useEffect } from "react";
import Spinner from "../components/spinner/Spinner"; // Assuming Spinner is in the same directory
import styled from "styled-components";
import Delivery from "../components/mian-page-components/Delivery";
import MainHero from "../components/mian-page-components/MainHero";
import MainPageBlog from "../components/mian-page-components/MainPageBlog";
import Manus from "../components/mian-page-components/Manus";
import Offers from "../components/mian-page-components/Offers";
import OurRestorant from "../components/mian-page-components/OurRestorant";
import PopularIntems from "../components/mian-page-components/PopularItems";
import Priority from "../components/mian-page-components/Priority";
import SpecialManu from "../components/mian-page-components/SpecialManu";

const Main = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate loading for demonstration purposes
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    // Clear timeout when unmounting to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []); // Empty dependency array ensures that this effect runs only once, equivalent to componentDidMount

  return (
    <div>
      {/* Spinner */}
      <Spinner loading={loading} />

      <MainContent loading={loading}>
        <MainHero />
        <PopularIntems />
        <MainPageBlog />
        <Offers />
        <Manus />
        <SpecialManu />
        <OurRestorant />
        <Delivery />
        <Priority />
      </MainContent>
    </div>
  );
};

export default Main;
const MainContent = styled.div<{ loading: boolean }>`
  display: ${(props) => (props.loading ? "none" : "block")};
`;
