import { OrderType } from "../type";
import OrderItem from "./OrderItem";
import classes from "../styles/Checkout.module.scss";

const Orders = ({ orders }: OrderType[]) => {
  return (
    <div className={classes.orders}>
      <div className={classes.orders__header}>
        <h3>{orders[0].company}</h3>
        <p>Fulfilled by {orders[0].company}</p>
      </div>
      {orders.map((item) => (
        <OrderItem key={item.id} item={item} />
      ))}
    </div>
  );
};
export default Orders;
