import CartHero from "../components/cart-components/CartHero";
import Cart from "../components/cart-components/Cart";
import Payment from "../components/cart-components/Payment";

const CartPage = () => {
  return (
    <div>
      <CartHero />
      <Cart />
      <Payment />
    </div>
  );
};

export default CartPage;
