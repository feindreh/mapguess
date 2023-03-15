

import { Link } from "react-router-dom"

function Home(){
    return(
        <div id="home">
            <Link className="link" to={"/pickPlay"}>
                Play
            </Link>
            <Link className="link" to={"/pickEdit"}>
                Bearbeiten
            </Link>
            <Link className="link" to={"/create"}>
                Neue Karte
            </Link>
        </div>
    )
}

export default Home