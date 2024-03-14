// Items.tsx
import styled from "styled-components";
import ItemsCard from "../components/items-component/ItemsCard";
import ItemsHero from "../components/items-component/ItemsHero";
import { useItemContext } from "../components/items-component/ItemContext";

const Items = () => {
  const { items } = useItemContext();
  console.log(items, "items");
  return (
    <div>
      <ItemsHero />
      <ItemsContainer>
        {items.map((item, index) => (
          <ItemsCard
            key={index}
            title={item.title}
            ingredients={item.ingredients}
            price={item.price}
            image={item.image || "/default-image.jpg"} // Provide a default image URL
          />
        ))}
      </ItemsContainer>
    </div>
  );
};

export default Items;

const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
  justify-items: center;
`;
