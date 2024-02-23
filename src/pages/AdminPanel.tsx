import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../defaultTheme";

const AdminPanel = () => {
  return (
    <Container>
      <Form>
        <h1>Add Items</h1>
        <div>
          <NamePrice>
            <WidthDiv>
              <p>Item Name</p>
              <Input type="text" />
            </WidthDiv>
            <WidthDiv>
              <p>Item Price</p>
              <Input type="number" />
            </WidthDiv>
          </NamePrice>
          <Descriptions>
            <WidthDiv>
              <p>Item Ingredients</p>
              <Input type="text" />
            </WidthDiv>
            <WidthDiv>
              <p>Description</p>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </WidthDiv>
          </Descriptions>
          <ImagesDiv>
            <div>
              <p>Add Main Image</p>
              <input type="file" name="" id="" />
            </div>
            <div>
              <p>Add Secondary Image</p>
              <input type="file" name="" id="" />
            </div>
            <div>
              <p>Add Tertiary Image</p>
              <input type="file" name="" id="" />
            </div>
          </ImagesDiv>
        </div>
        <ButtonDiv>
          <button>Submit</button>
        </ButtonDiv>
      </Form>
    </Container>
  );
};

export default AdminPanel;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 100px;
  @media (max-width: 1150px) {
    padding: 30px 50px;
  }
  h1 {
    font-size: 35px;
    font-weight: 700;
    line-height: 41px;
    color: ${defaultTheme.colors.red};
    padding-bottom: 10px;
    border-bottom: 2px solid ${defaultTheme.colors.red};
    margin-bottom: 20px;
  }
  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    color: ${defaultTheme.colors.red};
    margin-bottom: 5px;
  }
`;
const Input = styled.input`
  width: 400px;
  height: 50px;
  font-size: 25px;
  font-weight: 400;
  line-height: 29px;
  padding-left: 15px;
  border: 2px solid ${defaultTheme.colors.red};
  border-radius: 10px;
  background-color: ${defaultTheme.colors.floralwhite};
  color: ${defaultTheme.colors.blue};
  &:focus {
    outline: none;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
const WidthDiv = styled.div`
  width: 100%;
`;
const Form = styled.form`
  width: 100%;
`;

const NamePrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* flex-wrap: wrap; */
  margin-bottom: 20px;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
`;

const Descriptions = styled.div`
  display: flex;
  align-items: top;
  justify-content: space-between;
  flex-wrap: wrap;

  textarea {
    width: 400px;
    height: 150px;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    padding: 10px;
    border: 0;
    border: 2px solid ${defaultTheme.colors.red};
    border-radius: 10px;
    background-color: ${defaultTheme.colors.floralwhite};
    color: ${defaultTheme.colors.blue};
    resize: vertical;
    &:focus {
      outline: none;
    }
    @media (max-width: 1000px) {
      width: 100%;
    }
  }
`;
const ImagesDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 20px;
`;
const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  button {
    cursor: pointer;
    font-size: 25px;
    font-weight: 400;
    line-height: 29px;
    background-color: ${defaultTheme.colors.red};
    color: ${defaultTheme.colors.floralwhite};
    border: 0;
    border-radius: 10px;
    padding: 10px 15px;
  }
`;
