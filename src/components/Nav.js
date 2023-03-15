
import { Link } from "react-router-dom"

function NavBar(){
    return(
        <div id="navbar">
            <Link to={"/"}>
                Home
            </Link>
        </div>
    )
}

export default NavBar