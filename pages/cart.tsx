import { useSelector } from "react-redux";
import Checkout from "../Components/Checkout";
import Header from "../Components/Header";
import Icon from "../Components/Icon";
import OrderSummary from "../Components/OrderSummary";
import { OrderType } from "../type";

const Cart = () => {
  const cartdata: OrderType[] = useSelector((state) => state.cart);
  return (
    <>
      <Header />
      <div className="cart__header">
        <div>
          <h3 className="cart__header__title">
            <Icon name="arrow_back" />
            Your Shopping Cart
          </h3>
          <p className="cart__header__info">
            {cartdata.length} item(s).{" "}
            <span className="highlights btn">Add More</span>
          </p>
        </div>
        <div className="cart__header__badge">
          <img src="/img/shield-star-fill.svg" alt="" />
          <span className="highlights">100% Secure</span>
        </div>
      </div>
      <main className="main">
        <Checkout />
        <OrderSummary />
      </main>
    </>
  );
};
export default Cart;
