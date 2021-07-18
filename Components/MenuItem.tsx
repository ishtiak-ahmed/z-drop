import Icon from "./Icon"
import Link from 'next/link';

type Props = {
    to: string
    icon: string
    menu: string
}
const MenuItem = ({to, icon, menu}: Props) => {
    return (
        <div className="menu__item">
            <Icon name={icon} />
            <Link href={to}>
            {menu}
            </Link>
        </div>
    )
}

export default MenuItem;
