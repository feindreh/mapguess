import { useRef } from "react"
import { Link } from "react-router-dom"

function Point(props){

    const {point,deletePoint,mapID} = props
    
    const name = useRef()

    return (
        <div>
            <div>
                Punkt : 
            </div>
            <input onChange={()=>{point.name=name.current.value}} ref={name}type="text" defaultValue={point.name} placeholder={"Was soll gefunden werden"}></input>
            <Link to={`/editPoint/${mapID}/${point.id}`}>
                <button type="button">Diesen Punkt bearbeiten</button>
            </Link>
            <button type="button" onClick={()=>{deletePoint(point.id)}}>Löschen</button>
        </div>
    )
}

export default Point