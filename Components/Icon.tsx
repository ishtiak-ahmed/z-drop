type Props = {
    name: string
}
const Icon = ({name}: Props) => {
    return (
        <span className="material-icons-outlined icon">
            {name}
        </span>
    )
}
export default Icon;