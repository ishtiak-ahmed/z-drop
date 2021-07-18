import { useDispatch } from "react-redux";
import { OrderType } from "../type";
import { removeFromCart } from "../Redux/Actions/cartActions";
import classes from "../styles/Checkout.module.scss";
import heart from "/img/heart.svg";
import Image from "next/image";

const OrderItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };
  return (
    <div className={classes.orders__item}>
      <div className={classes.orders__item__img}>
        <div className={classes.orders__item__img__inner}>
          {/* <img src={item.image} alt="product image" /> */}
          <Image
            src={item.image}
            width={160}
            height={180}
            alt="Product Image"
          />
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
          <Image src="/img/heart.svg" alt="" height={25} width={25} />
        </span>
        <span className="btn" onClick={handleRemove}>
          <Image src="/img/delete.svg" alt="" width={25} height={25} />
        </span>
      </div>
    </div>
  );
};
export default OrderItem;
