import { useDispatch } from "react-redux";
import { OrderType } from "../type";
import { removeFromCart } from "../Redux/Actions/cartActions";
import classes from "../styles/Checkout.module.scss";
import heart from "/img/heart.svg";

const OrderItem = ({ item }: OrderType) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };
  return (
    <div className={classes.orders__item}>
      <div className={classes.orders__item__img}>
        <div className={classes.orders__item__img__inner}>
          <img src={item.image} alt="product image" />
        </div>
      </div>
      <div className={classes.orders__item__info}>
        <h4>{item.name}</h4>
        <p className="gray">
          <span>Color: {item.color}</span>
          <span>Size: {item.size}</span>
        </p>
        <p>Quantity: 1</p>
        <p>
          <span>Price: BDT {(item.price * (100 - item.discount)) / 100} </span>
          <span className="strike">BDT {item.price}</span>
          <span className="off">{item.discount}% off</span>
        </p>
      </div>
      <div className={classes.orders__item__btn}>
        <span className="btn">
          <img src="/img/heart.svg" alt="" />
        </span>
        <span className="btn" onClick={handleRemove}>
          <img src="/img/delete.svg" alt="" />
        </span>
      </div>
    </div>
  );
};
export default OrderItem;
