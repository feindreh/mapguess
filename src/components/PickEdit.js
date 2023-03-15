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
        <div>
            {maps.map((map) => {
                return(
                    <div key={map.id}>
                        <div>{map.name}</div>
                        <Link to={`/create/${map.id}`}>
                            <button type="button">Diese Karte bearbeiten</button>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default PickEdit