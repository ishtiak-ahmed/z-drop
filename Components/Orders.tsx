import { OrderType } from "../type";
import OrderItem from "./OrderItem";
import classes from "../styles/Checkout.module.scss";
import Icon from "./Icon";

const Orders = ({ orders }: OrderType[]) => {
  return (
    <div className={classes.orders}>
      <div className={classes.orders__header}>
        <div>
          <h3>
            {orders[0].company}
            <Icon name="check_circle" />
          </h3>
          <p>Fulfilled by {orders[0].company}</p>
        </div>
        <div className={classes.orders__header__right}>
          <h4>Delivery Charge: BDT 40</h4>
          <p>Estimate delivery on July 25</p>
        </div>
      </div>
      {orders.map((item) => (
        <OrderItem key={item.id} item={item} />
      ))}
      <div style={{ padding: "1.5em" }}>
        <p>
          Buy {5 - orders.length} more item(s) to enjoy free shipping on
          standard delivery
        </p>
      </div>
    </div>
  );
};
export default Orders;
