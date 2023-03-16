

import { Link } from "react-router-dom"

function Home(){
    return(
        <div id="home" className="listContainer">
            <div className="descriptionWrap">
                <Link className="link big button" to={"/pickPlay"}>
                    Spielen
                </Link>
                <div className="description">
                Spiele eine von der Community oder dir selbst erstellte Karte und zeig, dass du ein echter Map Guesser bist !
                </div>
            </div>
            <div className="descriptionWrap">
                <Link className="link big button" to={"/pickEdit"}>
                    Bearbeiten
                </Link>
                <div className="description">
                Bearbeite eine Karte, füge neue Punkte hinzu, lade ein  neues Bild hoch, oder platziere die Zielpunkte neu um deine Karte noch besser zu machen!
                </div>
            </div>
            <div className="descriptionWrap">
                <Link className="link big button"  to={"/create"}>
                    Neue Karte
                </Link>
                <div className="description">
                 Bau dir einfach selbst ganz einfach eine neue Karte zusammen und teile sie mit der Community!
                </div>
            </div>
        </div>
    )
}

export default Home