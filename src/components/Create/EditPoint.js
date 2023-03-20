import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router"
import { getImageUrlFromId, getMapSingle, updateMap} from "../../firebase/firebase"

import { Link } from "react-router-dom";

import { newArea } from "../../Picker.js/pick";

import Area from "./area";

function EditPoint(){

    const {mapID,pointID} = useParams()





    
    const [url,setUrl] = useState()
    const [map,setMap] = useState()
    const [point,setPoint] = useState()
    const [areas,setAreas] = useState([])
    
    const ImageRef = useRef()

    async function load(){
        const newUrl = await getImageUrlFromId(mapID)
        setUrl(newUrl)
        const newMap = await getMapSingle(mapID)
        setMap(newMap)
        const points = newMap.points

        points.forEach((point) => {if(point.id === pointID){
            setPoint(point)
            setAreas(point.areas)
        }})
    
    }

    function handleClick(e){
        let x = e.nativeEvent.offsetX / e.target.width
        let y = e.nativeEvent.offsetY / e.target.height

        setAreas([...areas,newArea(x,y)])
    }

    function upload(){

        const newMap = map

        newMap.points.forEach((point)=>{
            if(point.id === pointID){
                point.areas = areas
            }
        })

        updateMap(mapID,newMap)
    }

    useEffect(()=>{
        load()
    },[])

    console.log(ImageRef)

    return(
        <div className = "listContainer"> 
            <div>
                <div className="mid content">Wo ist {point?point.name:"Der Punkt"}</div>
                <div className="buttonWrap">
                    <button className="mid button" type="button" onClick={upload}>Speichern</button>
                    <Link className="link mid button"to = {`/create/${mapID}`}>
                        <div>Zurück</div>
                    </Link>
                </div>
            </div>
            <div  className = "pointImage" >
                <img className="image" src={url} alt="warum" ref={ImageRef} onClick={handleClick}></img>
                {areas.map((area)=>{return <Area image={ImageRef.current}area = {area} key={area.id}/>})}
            </div>
        </div>
    )
}

export default EditPoint