import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import classes from "../styles/Summary.module.scss";
import { RootState } from "../type";
import Icon from "./Icon";

const OrderSummary = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const [summary, setSummary] = useState({
    total: 0,
    item: 0,
  });

  useEffect(() => {
    const total: number = cart.reduce(
      (sum, item) => sum + (item.price * (100 - item.discount)) / 100,
      0
    );
    const item: number = cart.length;
    setSummary({ total, item });
  }, [cart]);
  return (
    <div className={classes.order__summary}>
      <h2 className={classes.order__summary__header}>Order Summary</h2>
      <div className={classes.order__summary__details}>
        <span>Sub Total ({summary.item} items):</span>
        <span className="right">$ {summary.total}</span>
        <span>Discount</span>
        <span className="right">$ 0</span>
        <span>Shipping Charge</span>
        <span className="right">$ 600</span>
      </div>
      <hr />
      <div className={classes.order__summary__coupon}>
        <div className="coupon">
          <span>Gift Card, Coupon & Promotional Codes </span>
          <span className="right">
            <Icon name="keyboard_arrow_down" />
          </span>
        </div>
        <div className={classes.order__summary__coupon__apply}>
          <input
            className={classes.order__summary__coupon__apply__field}
            type="text"
            placeholder="voucher code"
          />{" "}
          <span className={classes.order__summary__coupon__apply__btn}>
            Apply
          </span>
        </div>
      </div>
      <hr />
      <div className={classes.order__summary__details}>
        <span>Grand Total: </span>
        <span className="right">$ {summary.total + 600}</span>
      </div>
    </div>
  );
};

export default OrderSummary;
