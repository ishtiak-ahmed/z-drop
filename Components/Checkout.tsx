import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../type";
import Orders from "./Orders";

const Checkout = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const [filterData, setFilterData] = useState({});
  useEffect(() => {
    const newData = {};
    cart.forEach((item) => {
      if (newData[item.company]?.length) {
        // const newList = ;
        newData[item.company] = [...newData[item.company], item];
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
