
import { Link } from "react-router-dom"

function NavBar(){
    return(
        <div id="navbar">
            <Link className = "link mid button"to={"/"}>
                Home
            </Link>
            <Link className = "link mid button"to={"/filler"}>
                Login
            </Link>
            <Link className = "link mid button"to={"/filler"}>
                Kontakt
            </Link>
            
        </div>
    )
}

export default NavBar