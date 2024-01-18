import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";

const Manus = () => {
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
`;
