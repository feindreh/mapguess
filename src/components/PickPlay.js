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
        <div>
            {maps.map((map)=>{
                return(
                <div key={map.id}>
                    <div>{map.name}</div>
                    <Link to={`/play/${map.id}`}>
                        <button type = "button">Diese Map spielen!</button>
                    </Link>
                </div>
                )
            })}
        </div>
    )
}

export default PickPlay 