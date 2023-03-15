import { useRef } from "react"
import { Link } from "react-router-dom"

function Point(props){

    const {point,deletePoint,mapID,upload} = props
    
    const name = useRef()

    return (
        <div className="point">

            <Link onClick={upload}className="link" to={`/editPoint/${mapID}/${point.id}`}>
                            Bearbeiten
            </Link>

            <div className="inputwrap">  
                <input onChange={()=>{point.name=name.current.value}} ref={name}type="text" defaultValue={point.name} placeholder={"Was soll gefunden werden"}></input>
            </div>

            <div className ="link" onClick={()=>{deletePoint(point.id)}}>Löschen</div>
        </div>
    )
}

export default Point