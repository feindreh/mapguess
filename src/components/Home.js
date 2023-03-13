import "./Home.css"

import { Link } from "react-router-dom"

function Home(){
    return(
        <div>
            <Link to={"/pickPlay"}>
                Play
            </Link>
            <Link to={"/create"}>
                Edit/Create
            </Link>
        </div>
    )
}

export default Home