import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const OrderSummary = () => {
    const cart = useSelector(state => state.cart);
    const [summary, setSummary] = useState({});
    useEffect(()=> {
        const total: number = cart.reduce((sum, item) => sum + (item.price * (100 - item.discount) / 100), 0);
        const item: number = cart.length;
        const deliveryCharge: number = cart.reduce((sum, item) => sum + item.delivery, 0);
        setSummary({total, item, deliveryCharge});
    },[cart])
    return (
        <div>
            <h2>Order Summary</h2>
            <p>Total Item: {summary.item}</p>
            <p>Total: {summary.total}</p>
        </div>
    )
}

export default OrderSummary;
