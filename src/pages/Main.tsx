// import React from "react";
import Header from "../components/Header";
import Delivery from "../components/mian-page-components/Delivery";
import MainHero from "../components/mian-page-components/MainHero";
import MainPageBlog from "../components/mian-page-components/MainPageBlog";
import Manus from "../components/mian-page-components/Manus";
import Offers from "../components/mian-page-components/Offers";
import OurRestorant from "../components/mian-page-components/OurRestorant";
import PopularIntems from "../components/mian-page-components/PopularItems";
import Priority from "../components/mian-page-components/Priority";
import SpecialManu from "../components/mian-page-components/SpecialManu";
// import styled from "styled-components";

const Main = () => {
  return (
    <div>
      <Header />
      <MainHero />
      <PopularIntems />
      <MainPageBlog />
      <Offers />
      <Manus />
      <SpecialManu />
      <OurRestorant />
      <Delivery />
      <Priority />
    </div>
  );
};
export default Main;

// const MainContainer=styled.div`
// padding: 0 100px;
// `
