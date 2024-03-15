// Items.tsx
import styled from "styled-components";
import ItemsCard from "../components/items-component/ItemsCard";
import ItemsHero from "../components/items-component/ItemsHero";

const Items = () => {
  return (
    <div>
      <ItemsHero />
      <ItemsContainer>
        <ItemsCard
          title={title}
          ingredients={ingredients}
          price={price}
          image={image || "/default-image.jpg"} // Provide a default image URL
        />
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
