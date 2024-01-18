import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import { useState } from "react";
import manucardimg1 from "../../assets/mainpage/manucardimg1.png";
import ManuCards from "./Manucards";

const Manus = () => {
  const [activeManu, setActiveManu] = useState("BREAKFAST");

  const handleHeaderClick = (manu) => {
    setActiveManu(manu);
  };
  const ManuCard = {
    BREAKFAST: [
      { img: manucardimg1 },
      {
        meal: "Gazpacho Garlic",
        ingredients: "Chilled tomato, cucumber, garlic, redpepper soup.",
        price: "$55",
      },
      {
        meal: "Pan Con Berenjina Frita",
        ingredients: "Marinated seabass with sour sauce, dill & coriander on bread.",
        price: "$40",
      },
      {
        meal: "New Lubina Marinada",
        ingredients: "Fried aubergine with almond on bread (2 pieces).",
        price: "$45",
      },
      {
        meal: "Gazpacho",
        ingredients: "Atlantic cod fillet, chips, salad, tartare, lemon.",
        price: "$35",
      },
      {
        meal: "Coconut Chia Bowl",
        ingredients: "Marinated seabass with sour saucel & coriander on bread.",
        price: "$95",
      },
      {
        meal: "New Lubina Marinada",
        ingredients: "Atlantic cod fillet, chips, salad, tartare, lemon.",
        price: "$120",
      },
      {
        meal: "Gazpacho Garlic",
        ingredients: "Chilled tomato, cucumber, garlic, redpepper soup.",
        price: "$29",
      },
    ],
    LUNCH: [
      { img: manucardimg1 },
      {
        meal: "Spaghetti Bolognese",
        ingredients:
          "Ground beef, onions, garlic, tomatoes,  Italian herbs, Parmesan cheese, and pasta",
        price: "$20",
      },
      {
        meal: "Chicken Pad Thai",
        ingredients: "Rice noodles, chicken, bean sprouts, peanuts, and Pad Thai sauce.",
        price: "$25",
      },
      {
        meal: "Margherita Pizza",
        ingredients: "Pizza dough, tomatoes, fresh mozzarella, basil, oliveoil, ",
        price: "$28",
      },
      {
        meal: "Chicken Alfredo Pasta",
        ingredients:
          " Fettuccine pasta, chicken breast, heavy cream, butter, Parmesan cheese, and garlic",
        price: "$30",
      },
      {
        meal: "Vegetable Stir-Fry",
        ingredients: " Mixed vegetables, tofu or chicken, soy sauce, ginger, and garlic.",
        price: "$12",
      },
      {
        meal: "Sushi Roll (California Roll)",
        ingredients:
          " Nori, sushi rice, imitation crab or real crab, avocado, cucumber, and soy sauce.",
        price: "$15",
      },
      {
        meal: "BBQ Pulled Pork Sandwich",
        ingredients: " Pulled pork, barbecue sauce, coleslaw, and a bun",
        price: "$15",
      },
    ],
    DINNER: [
      { img: manucardimg1 },
      {
        meal: "Grilled Salmon with Lemon-Dill Sauce",
        ingredients: "Salmon fillets, lemon, dill, oliveoil, garlic, salt, and pepper.",
        price: "$25",
      },
      {
        meal: "Beef Stroganoff",
        ingredients:
          "Beef sirloin, mushrooms, onion, garlic, sour cream, beef broth, and egg noodles.",
        price: "$30",
      },
      {
        meal: "Vegetarian Lasagna",
        ingredients: "Lasagna noodles, mozzarella cheese, marinara sauce, spinach, and mushrooms.",
        price: "$30",
      },
      {
        meal: "Teriyaki Chicken Bowl",
        ingredients: "Chicken thighs, soy sauce, honey, ginger, garlic, rice, and vegetables.",
        price: "$19",
      },
      {
        meal: "Eggplant Parmesan",
        ingredients: "Eggplant, breadcrumbs, marinara sauce,Parmesan cheese, and basil.",
        price: "$14",
      },
      {
        meal: "Shrimp Scampi",
        ingredients: "Shrimp, garlic, whitewine, lemon, parsley, butter, and linguine.",
        price: "$28",
      },
      {
        meal: "Chicken Fajitas",
        ingredients:
          " Chicken breasts, bell peppers, onions, tortillas, sour cream, and Mexican spices.",
        price: "$33",
      },
    ],
    STARTERS: [
      { img: manucardimg1 },
      {
        meal: "Caprese Salad",
        ingredients:
          "Fresh tomatoes, mozzarella cheese, basil, balsamic glaze, oliveoil, salt, and pepper.",
        price: "$8",
      },
      {
        meal: "Spinach and Artichoke Dip",
        ingredients:
          "Spinach, artichokes, cream cheese, sour cream, mayonnaise, garlic, and Parmesan cheese.",
        price: "$15",
      },
      {
        meal: "Bruschetta",
        ingredients: "Tomatoes, garlic, basil, oliveoil, balsamic vinegar, and baguette slices.",
        price: "$12",
      },
      {
        meal: "Stuffed Mushrooms",
        ingredients: "Mushrooms, cream cheese, breadcrumbs, garlic, parsley, and Parmesan cheese.",
        price: "$15",
      },
      {
        meal: "Shrimp Cocktail",
        ingredients: "Shrimp, cocktail sauce, lemon wedges, and parsley for garnish.",
        price: "$18",
      },
      {
        meal: "Crispy Calamari",
        ingredients: "Calamari rings, flour, cornmeal, spices, and a side of marinara sauce.",
        price: "$18",
      },
      {
        meal: "Chicken Satay Skewers",
        ingredients: "Chicken skewers, peanut sauce, soy sauce, ginger, and garlic.",
        price: "$16",
      },
    ],
    BEVERAGES: [
      { img: manucardimg1 },
      {
        meal: "Classic Mojito",
        ingredients: "White rum, fresh lime juice, mint leaves, simple syrup, and soda water.",
        price: "$8",
      },
      {
        meal: "Mango Lassi",
        ingredients: "Mango, yogurt, milk, sugar, and a pinch of cardamom.",
        price: "$5",
      },
      {
        meal: "Iced Matcha Latte",
        ingredients: "Matcha powder, milk, ice, and sweetener (optional).",
        price: "$4",
      },
      {
        meal: "Virgin Pina Colada",
        ingredients: "Pineapple juice, coconut cream, crushed ice, and pineapple garnish.",
        price: "$10",
      },
      {
        meal: "Espresso Martini",
        ingredients: "Vodka, coffee liqueur, freshly brewed espresso, and simple syrup.",
        price: "$15",
      },
      {
        meal: "Freshly Squeezed Orange Juice",
        ingredients: "Oranges.",
        price: "$3",
      },
      {
        meal: "Cucumber Mint Cooler",
        ingredients: "Cucumber, mint leaves, limejuice, simple syrup, and soda water.",
        price: "$9",
      },
    ],
  };
  const getCardsForManu = () => {
    return ManuCard[activeManu] || [];
  };
  return (
    <ManuWrapper>
      <ManuContainer>
        <Wrapper>
          <h2>SPECIALS</h2>
          <h1>Check out our menu</h1>
          <p>
            Demoralized by the charms of pleasure of the moment so blinded except to some advantage.
          </p>
        </Wrapper>{" "}
        <div>
          <Header>
            {Object.keys(ManuCard).map((manu, index) => (
              <HeaderItem
                key={index}
                active={activeManu === manu}
                onClick={() => handleHeaderClick(manu)}
              >
                {manu}
              </HeaderItem>
            ))}
          </Header>
          <div>
            {getCardsForManu().map((card, index) => (
              <ManuCards
                key={`${activeManu}-${index}`} // Using a unique key
                img={card.img}
                meal={card.meal}
                ingredients={card.ingredients}
                price={card.price}
              />
            ))}
          </div>
        </div>
      </ManuContainer>
    </ManuWrapper>
  );
};
export default Manus;

const ManuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ManuContainer = styled.div`
  /* flex-direction: column; */
`;
const Wrapper = styled.div`
  text-align: center;
  h2 {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.red};
  }
  h1 {
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.blue};
    margin-top: 16px;
    margin-bottom: 15px;
  }
  p {
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${defaultTheme.colors.blue};
    margin-bottom: 21px;
  }
`;

// const Navigation = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   p {
//     width: 300px;
//     height: 88px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     font-size: 25px;
//     font-style: normal;
//     font-weight: 400;
//     line-height: normal;
//     color: ${defaultTheme.colors.red};
//     cursor: pointer;
//   }
// `;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderItem = styled.p<HeaderItem>`
  width: 300px;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: 2px solid #c4c4c4;
  cursor: pointer;

  ${(props) =>
    props.active
      ? `
        background-color:${defaultTheme.colors.red};
        color: ${defaultTheme.colors.floralwhite};
      `
      : ""};
`;
