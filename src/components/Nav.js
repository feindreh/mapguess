
import { Link } from "react-router-dom"

function NavBar(){
    return(
        <div id="navbar">
            <Link className = "link"to={"/"}>
                Home
            </Link>
        </div>
    )
}

export default NavBar