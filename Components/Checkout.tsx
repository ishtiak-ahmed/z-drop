import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Orders from "./Orders";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const [filterData, setFilterData] = useState({});
  useEffect(() => {
    const newData = {};
    cart.forEach((item) => {
      if (newData[item.compnay]) {
        const newList = [...newData[item.company], item];
        newData[item.company] = [...newList];
      } else {
        newData[item.company] = [item];
      }
    });
    setFilterData(newData);
  }, [cart]);

  return (
    <div>
      {Object.keys(filterData).map((key) => (
        <Orders key={key} orders={filterData[key]} />
      ))}
    </div>
  );
};

export default Checkout;
