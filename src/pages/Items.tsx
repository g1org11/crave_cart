import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { defaultTheme } from "../defaultTheme";
import axios from "axios"; // Import Axios
import ItemsCard from "../components/items-component/ItemsCard";
import ItemsHero from "../components/items-component/ItemsHero";
import { useLocation } from "react-router-dom";

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
  const [filter, setFilter] = useState<string>("All");
  const location = useLocation();

  useEffect(() => {
    // Fetch items when component mounts or filter changes
    fetchItems();
  }, [filter]);

  useEffect(() => {
    // Scroll to top when location changes (navigation)
    window.scrollTo(0, 0);
  }, [location]);

  const fetchItems = async () => {
    try {
      const response = await axios.get<Item[]>("http://localhost:5000/get-items"); // GET request using Axios
      setItems(response.data); // Set the items in the state

      console.log(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const filteredItems =
    filter === "All" ? items : items.filter((item) => item.courseType === filter);

  return (
    <div>
      <ItemsHero />
      <div>
        <Select>
          <p>Filter by Course Type:</p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Main Course">Main Course</option>
            <option value="Starter Course">Starter Course</option>
            <option value="Dessert">Dessert</option>
            <option value="Cocktail">Cocktail</option>
          </select>
        </Select>{" "}
        <ItemsContainer>
          {filteredItems.map((item, index) => (
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
    </div>
  );
};

export default Items;

const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 50px;
  row-gap: 20px;
  padding: 20px;
`;

const Select = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 20px 0;
  p {
    margin-left: 80px;
    margin-right: 10px;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    color: ${defaultTheme.colors.blue};
  }
  select {
    /* width: 100px; */
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    color: ${defaultTheme.colors.blue};
    margin-bottom: 5px;
    background-color: ${defaultTheme.colors.lightred};
    &:focus {
      outline: none;
    }
  }
`;
