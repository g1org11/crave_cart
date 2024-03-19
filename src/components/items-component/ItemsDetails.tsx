import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { defaultTheme } from "../../defaultTheme";

interface Item {
  _id: string;
  name: string;
  ingredients: string;
  price: number;
  mainImage: string;
  secondaryImage: string;
  tertiaryImage: string;
  descriptions: string;
}

const ItemsDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Accessing the item ID from the URL
  const [item, setItem] = useState<Item | null>(null);

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await axios.get<Item>(`http://localhost:5000/get-item/${id}`);
        setItem(response.data);
      } catch (error) {
        console.error("Error fetching item details:", error);
      }
    };

    fetchItemDetails();

    // Cleanup function to clear item details when unmounting
    return () => setItem(null);
  }, [id]); // Fetch item details whenever ID changes

  if (!item) {
    return <div>Loading...</div>; // Placeholder while loading item details
  }

  return (
    <Conatiner>
      <div>
        {/* Main image */}
        <MainImage src={`../../../uploads/${item.mainImage}`} alt="Main" />
        <ImagesDiv>
          {/* Second image */}
          <Second_Third src={`../../../uploads/${item.secondaryImage}`} alt="Secondary" />
          {/* Third image */}
          <Second_Third src={`../../../uploads/${item.tertiaryImage}`} alt="Tertiary" />
        </ImagesDiv>
      </div>
      <ItemCOntent>
        {/* Name */}
        <h3> Name of the Dish:</h3>
        <p>{item.name}</p>
        {/* Ingredients */}
        <h3> Ingredients of the Dish:</h3>
        <p>{item.ingredients}</p>
        {/* Price */}
        <h3>Price of the Dish:</h3>
        <p> From $ {item.price}</p>
        <h3>Description of the Dish:</h3>
        {/* Description */}
        <p>{item.descriptions}</p>
      </ItemCOntent>
    </Conatiner>
  );
};

export default ItemsDetails;

const Conatiner = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: top;
  justify-content: space-evenly;
  padding: 8px 30px;
  @media (max-width: 1000px) {
    text-align: center;
    align-items: center;
    flex-direction: column-reverse;
  }
`;

const ImagesDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const MainImage = styled.img`
  width: 580px;
  height: 330px;
  border-radius: 10px;
  @media (max-width: 1250px) {
    width: 380px;
  }
  @media (max-width: 1000px) {
    width: 580px;
  }
  @media (max-width: 750px) {
    width: 420px;
  }
  @media (max-width: 550px) {
    width: 320px;
  }
  /* background-image: url(${(props) => props.src}); */
`;
const Second_Third = styled.img`
  width: 280px;
  height: 200px;
  border-radius: 20px;
  @media (max-width: 1250px) {
    width: 180px;
  }
  @media (max-width: 1000px) {
    width: 280px;
  }
  @media (max-width: 750px) {
    width: 200px;
  }
  @media (max-width: 750px) {
    width: 150px;
  }

  /* background-image: url(${(props) => props.src}); */
`;
const ItemCOntent = styled.div`
  h3 {
    font-size: 24px;
    color: ${defaultTheme.colors.red};
    margin-bottom: 6px;
  }
  p {
    width: 550px;
    font-size: 18px;
    color: ${defaultTheme.colors.blue};
    margin-bottom: 10px;
    @media (max-width: 1250px) {
      width: 500px;
    }
    @media (max-width: 750px) {
      width: 350px;
    }
  }
`;
