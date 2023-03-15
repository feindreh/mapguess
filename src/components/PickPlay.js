import { useEffect, useState } from "react"
import { getMapCollection } from "../firebase/firebase"
import { Link } from "react-router-dom"



function PickPlay(){

    const [maps,setMaps] = useState([])

    async function load(){
        const newMaps = await getMapCollection()
        setMaps(newMaps)
    }

    useEffect(()=>{
        load()
    },[])


    return (
        <div className=" pickPlay listContainer" >
            <div className="todo">
                Wähle eine Karte
            </div>

            <div className="list">
                {maps.map((map)=>{
                    return(
                    <div key={map.id} >
                        <Link  className = "link" to={`/play/${map.id}`}>
                           {map.name}
                        </Link>
                    </div>
                    )
                })}
            </div>

        </div>
    )
}

export default PickPlay 