import Image from "next/image";
import { useSelector } from "react-redux";
import Checkout from "../Components/Checkout";
import Header from "../Components/Header";
import Icon from "../Components/Icon";
import OrderSummary from "../Components/OrderSummary";
import { OrderType, RootState } from "../type";

const Cart = () => {
  const cartdata: OrderType[] = useSelector((state: RootState) => state.cart);
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
          <Image
            src="/img/shield-star-fill.svg"
            alt=""
            width={25}
            height={25}
          />
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
