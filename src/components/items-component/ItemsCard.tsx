import React from "react";

interface Props {
  title: string;
  ingredients: string;
  price: number;
  image: string;
}

const ItemsCard: React.FC<Props> = ({ title, ingredients, price, image }) => {
  const imageUrl = image ? image : "/default-image.jpg"; // Provide a default image URL if image is falsy

  return (
    <div>
      <h2>{title}</h2>
      <img src={imageUrl} alt={title} />
      <p>{ingredients}</p>
      <p>{price}</p>
    </div>
  );
};

export default ItemsCard;
