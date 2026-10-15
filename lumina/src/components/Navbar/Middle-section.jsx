import { Link } from "react-router-dom"

const Middle = () => {
    return (
        <nav className=" gap-7 flex flex-row justify-between font-medium text-gray-600">
            <Link to='/'>Home</Link>
            <Link to='/shop-catalog'>Shop Catalog</Link>
            <Link to='/collections'>Collections</Link>
        </nav>
    )
}


export default Middle 