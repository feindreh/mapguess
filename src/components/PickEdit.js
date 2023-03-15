import { useEffect,useState } from "react"
import { getMapCollection } from "../firebase/firebase"
import { Link } from "react-router-dom"

function PickEdit(){

    async function load(){
        const collection = await getMapCollection()
        setMaps(collection)
    }

    const [maps,setMaps] = useState([])

    useEffect(()=>{
            load()
        },[])

    return (
         <div className=" pickPlay listContainer">
            <div className = "todo">
                Karte bearbeiten
            </div>
            <div className="list">
                {maps.map((map) => {
                    return(
                        <div key={map.id}>
                            <Link className="link" to={`/create/${map.id}`}>
                               {map.name}
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PickEdit