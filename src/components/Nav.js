
import { Link } from "react-router-dom"

function NavBar(){
    return(
        <div id="navbar">
            <Link className = "link"to={"/"}>
                Home
            </Link>
            <Link className = "link"to={"/filler"}>
                Login
            </Link>
            <Link className = "link"to={"/filler"}>
                Kontakt
            </Link>
            
        </div>
    )
}

export default NavBar