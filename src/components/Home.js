import "./Home.css"

import { Link } from "react-router-dom"

function Home(){
    return(
        <div>
            <Link to={"/play"}>
                Play
            </Link>
        </div>
    )
}

export default Home