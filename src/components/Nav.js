
import { Link } from "react-router-dom"

function NavBar(){
    return(
        <div id="navbar">
            <Link className = "link"to={"/"}>
                Home
            </Link>
            <Link className = "link"to={"/"}>
                Login
            </Link>
            <Link className = "link"to={"/"}>
                Kontakt
            </Link>
            
        </div>
    )
}

export default NavBar