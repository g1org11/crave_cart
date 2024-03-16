import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios"; // Import Axios
import ItemsCard from "../components/items-component/ItemsCard";
import ItemsHero from "../components/items-component/ItemsHero";

interface Item {
  name: string;
  ingredients: string;
  price: number;
  mainImage?: string;
  courseType: string;
  // Add other properties as needed
}

const Items: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get<Item[]>("http://localhost:5000/get-items"); // GET request using Axios
      setItems(response.data); // Set the items in the state

      console.log(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  return (
    <div>
      <ItemsHero />
      <ItemsContainer>
        {items.map((item, index) => (
          <ItemsCard
            key={index}
            title={item.name}
            ingredients={item.ingredients}
            price={item.price}
            mainimage={item.mainImage || "/default-image.jpg"}
            courseType={item.courseType}
          />
        ))}
      </ItemsContainer>
    </div>
  );
};

export default Items;

const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  justify-items: center;
`;
