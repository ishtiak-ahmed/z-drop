import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Orders from "./Orders";

const Checkout = () => {
    const cart = useSelector(state => state.cart);
    const [filterData, setFilterData] = useState({});
    useEffect(() => {
        const newData = {};
        cart.forEach(item => {
            if(newData[item.compnay]){
                newData[item.company] = [...newData[item.company], item]
            }else {
                newData[item.company] = [item]
            }
        })
        setFilterData(newData)
    },[cart])
    
    return (
        <div>
            <h2>Checkout Page</h2>
            {
                Object.keys(filterData).map(key => <Orders key={key} orders={filterData[key]}/>)
            }
        </div>
    )
}

export default Checkout;
