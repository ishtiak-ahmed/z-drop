import { useDispatch } from "react-redux";
import { OrderType } from "../type";
import { removeFromCart } from "../Redux/Actions/cartActions";

const OrderItem = ({ item }: OrderType) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };
  return (
    <div>
      <h4>{item.name}</h4>
      <button onClick={handleRemove}>Delete</button>
      <span>Color: {item.color}</span>
      <span>Size: {item.size}</span>
      <span>Quantity: 1</span>
      <p>
        Price: {(item.price * (100 - item.discount)) / 100}{" "}
        <span>{item.price}</span>
      </p>
    </div>
  );
};
export default OrderItem;
