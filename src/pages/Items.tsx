// Items.tsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import ItemsCard from "../components/items-component/ItemsCard";
import ItemsHero from "../components/items-component/ItemsHero";
import { useLocation, Link } from "react-router-dom";

import { defaultTheme } from "../defaultTheme";

interface Item {
  [_id: string]: any;
  name: string;
  ingredients: string;
  price: number;
  mainImage?: string;
  secondaryImage?: string;
  tertiaryImage?: string;
  descriptions?: string;
  courseType: string;
}

const Items: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [filter, setFilter] = useState<string>("All");
  const location = useLocation();

  useEffect(() => {
    fetchItems();
  }, [filter]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const fetchItems = async () => {
    try {
      const response = await axios.get<Item[]>("http://localhost:5000/get-items");
      setItems(response.data);
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
            <Link
              key={index}
              to={`/items/${encodeURIComponent(item.name)}/${item._id}`}
              style={{ textDecoration: "none" }}
            >
              <ItemsCard
                title={item.name}
                ingredients={item.ingredients}
                price={item.price}
                mainimage={item.mainImage || "/default-image.jpg"}
                courseType={item.courseType}
              />
            </Link>
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
