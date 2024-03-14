import story from "../../assets/about-us/image_ourStory_.png";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";

const OurStory = () => {
  return (
    <StoryContainer>
      <h1>OUR STORY</h1>
      <Wrapper>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passage
        </p>
        <img src={story} alt="story" />
      </Wrapper>
    </StoryContainer>
  );
};
export default OurStory;

const StoryContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 25px;
  margin-top: 70px;
  padding: 0 100px;

  h1 {
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.red};
  }
  @media (max-width: 795px) {
    padding: 0px 50px;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 30px;
  P {
    max-width: 600px;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: justify;
    color: ${defaultTheme.colors.blue};
  }
  @media (max-width: 1200px) {
    flex-direction: column;
  }
  @media (max-width: 550px) {
    img {
      width: 400px;
    }
  }
`;
