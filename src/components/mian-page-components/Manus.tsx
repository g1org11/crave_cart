import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import { useState } from "react";

const Manus = () => {
  const [activeManu, setActiveManu] = useState("BREAKFAST");

  const handleHeaderClick = (manu) => {
    setActiveRegion(manu);
  };
  const ManuCards = {
    BREAKFAST: [
      { img: "img" },
      {
        meal: "Gazpacho Garlic",
        material: "Chilled tomato, cucumber, garlic, red pepper soup.",
        price: "$55",
      },
      {
        meal: "Pan Con Berenjina Frita",
        material: "Marinated seabass with sour sauce, dill & coriander on bread.",
        price: "$40",
      },
      {
        meal: "New Lubina Marinada",
        material: "Fried aubergine with almond on bread (2 pieces).",
        price: "$45",
      },
      {
        meal: "Gazpacho",
        material: "Atlantic cod fillet, chips, salad, tartare, lemon.",
        price: "$35",
      },
      {
        meal: "Coconut Chia Bowl",
        material: "Marinated seabass with sour saucel & coriander on bread.",
        price: "$95",
      },
      {
        meal: "New Lubina Marinada",
        material: "Atlantic cod fillet, chips, salad, tartare, lemon.",
        price: "$120",
      },
      {
        meal: "Gazpacho Garlic",
        material: "Chilled tomato, cucumber, garlic, red pepper soup.",
        price: "$29",
      },
    ],
  };

  return (
    <ManuContainer>
      <Wrapper>
        <h2>SPECIALS</h2>
        <h1>Check out our menu</h1>
        <p>
          Demoralized by the charms of pleasure of the moment so blinded except to some advantage.
        </p>
      </Wrapper>{" "}
      <div>
        <Navigation>
          <p>BREAKFAST</p>
          <p>LUNCH</p>
          <p>DINNER</p>
          <p>STARTERS</p>
          <p>BEVERAGES</p>
        </Navigation>
        <div></div>
      </div>
    </ManuContainer>
  );
};
export default Manus;

const ManuContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Wrapper = styled.div`
  text-align: center;
  h2 {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.red};
  }
  h1 {
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.blue};
    margin-top: 16px;
    margin-bottom: 15px;
  }
  p {
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${defaultTheme.colors.blue};
    margin-bottom: 21px;
  }
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    width: 300px;
    height: 88px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${defaultTheme.colors.red};
    cursor: pointer;
  }
`;
