import { useEffect,useState } from "react"
import { getMapCollection } from "../firebase/firebase"
import "./PickEdit.css"
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
   

        console.log(maps)

    return (
        <div>
            {maps.map((map) => {
                return(
                    <div>
                        <Link to={`/create/${map.id}`}>
                            <div>{map.name}</div>
                            <button type="button">Diese Karte bearbeiten</button>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default PickEdit