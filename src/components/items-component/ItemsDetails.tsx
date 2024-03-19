import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";

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
    <div>
      <div>
        {/* Main image */}
        <MainImage src={`../../../uploads/${item.mainImage}`} alt="Main" />
        <div>
          {/* Second image */}
          <Second_Third src={`../../../uploads/${item.secondaryImage}`} alt="Secondary" />
          {/* Third image */}
          <Second_Third src={`../../../uploads/${item.tertiaryImage}`} alt="Tertiary" />
        </div>
      </div>
      <div>
        {/* Name */}
        <p>{item.name}</p>
        {/* Ingredients */}
        <p>{item.ingredients}</p>
        {/* Price */}
        <p>{item.price}</p>
        {/* Description */}
        <p>{item.descriptions}</p>
      </div>
    </div>
  );
};

export default ItemsDetails;

const MainImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 10px;

  /* background-image: url(${(props) => props.src}); */
`;
const Second_Third = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 20px;

  /* background-image: url(${(props) => props.src}); */
`;
