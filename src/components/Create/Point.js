import { useRef } from "react"
import { Link } from "react-router-dom"

function Point(props){

    const {point,deletePoint,mapID,upload} = props
    
    const name = useRef()

    return (
        <div className="point">

            <div className="inputwrap">  
                <input className="mid content"onChange={()=>{point.name=name.current.value}} ref={name}type="text" defaultValue={point.name} placeholder={"Was soll gefunden werden"}></input>
            </div>
            <div className="buttonWrap">
                <Link onClick={upload}className="link button mid" to={`/editPoint/${mapID}/${point.id}`}>
                                Bearbeiten
                </Link>
                <div className ="link mid button" onClick={()=>{deletePoint(point.id)}}>Löschen</div>
            </div>
        </div>
    )
}

export default Point