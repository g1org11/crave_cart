import CartHero from "../components/cart-components/CartHero";
import Cart from "../components/cart-components/Cart";
import { useState, useEffect } from "react";
import Spinner from "../components/spinner/Spinner";
import styled from "styled-components";

const CartPage = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate loading for demonstration purposes
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    // Clear timeout when unmounting to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div>
      <Spinner loading={loading} />
      <MainContent loading={loading}>
        <CartHero />
        <Cart />
      </MainContent>
    </div>
  );
};

export default CartPage;
const MainContent = styled.div<{ loading: boolean }>`
  display: ${(props) => (props.loading ? "none" : "block")};
`;
