

import { Link } from "react-router-dom"

function Home(){
    return(
        <div>
            <Link to={"/pickPlay"}>
                Play
            </Link>
            <Link to={"/pickEdit"}>
                Bearbeiten
            </Link>
            <Link to={"/create"}>
                Neue Karte
            </Link>
        </div>
    )
}

export default Home