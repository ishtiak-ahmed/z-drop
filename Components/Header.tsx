import MenuItem from "./MenuItem"
import classes from '../styles/Header.module.scss';

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.header__logo}>
                <h2>z drop</h2>
            </div>
            <nav>
                <MenuItem to="/" icon="shopping_cart" menu="Checkout" />
                <MenuItem to="/cart" icon="place" menu="Shipping Address" />
                <MenuItem to="/" icon="payment" menu="Payment" />
            </nav>
        </header>
    )
}

export default Header;
