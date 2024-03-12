import React from "react";
import pizza from "./../assets/items/pizza.png";
import styled from "styled-components";
import { defaultTheme } from "../defaultTheme";
import ItemsCard from "../components/items-component/ItemsCard";
import ItemsHero from "../components/items-component/Itemshero";
import { useItemContext } from "../components/items-component/ItemContext";
const Items = () => {
  const { items } = useItemContext();

  return (
    <div>
      <ItemsHero />
      {items.map((item, index) => (
        <ItemsCard
          key={index}
          title={item.title}
          ingredients={item.ingredients}
          price={item.price}
          img={item.image}
        />
      ))}
    </div>
  );
};

export default Items;

const ItemContainer = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 1px 4px 3px #00000040;
  border-radius: 20px;
`;
const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  color: ${defaultTheme.colors.blue};
`;
const Ingredients = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  color: ${defaultTheme.colors.blue};
  margin-top: 10px;
  margin-bottom: 7px;
`;
const Price = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  color: ${defaultTheme.colors.blue};
`;
const ItemImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 20px;
  margin-left: 5px;
`;
