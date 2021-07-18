import { useSelector } from "react-redux";
import Checkout from "../Components/Checkout";
import Header from "../Components/Header";
import OrderSummary from "../Components/OrderSummary";
import { OrderType } from "../type";


const Cart = () => {
    const cartdata: OrderType[] = useSelector(state => state.cart);
    return (
        <div>
            <Header />
            <h2>Total item: {cartdata?.length}</h2>
            <main>
                <Checkout />
                <OrderSummary />
            </main>
        </div>
    )
}
export default Cart;
