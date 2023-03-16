import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router"
import { getImageUrlFromId, getMapSingle, updateMap} from "../../firebase/firebase"

import { Link } from "react-router-dom";

import Icon from '@mdi/react';
import { mdiMapMarker } from '@mdi/js';


function EditPoint(){

    const {mapID,pointID} = useParams()

    const [url,setUrl] = useState()
    const [map,setMap] = useState()
    const [point,setPoint] = useState()
    const [x,setX] = useState(null)
    const [y,setY] = useState(null)
    
    const MarkRef = useRef()
    const ImageRef = useRef()

    async function load(){
        const newUrl = await getImageUrlFromId(mapID)
        setUrl(newUrl)
        const newMap = await getMapSingle(mapID)
        setMap(newMap)
        const points = newMap.points

        points.forEach((point) => {if(point.id === pointID){
            setPoint(point)
            if(point.x !== null && point.y !== null){
                placeMarker(point.x,point.y)
                setX(point.x)
                setY(point.y)
            }
        }})
    
    }

    function placeMarker(x,y){

        const xAdjusted = x * ImageRef.current.offsetWidth
        const yAdjusted = y * ImageRef.current.offsetHeight


        MarkRef.current.style.transform = `translate(${xAdjusted-15}px,${yAdjusted-28}px)`;
        MarkRef.current.style.visibility = "visible";
        MarkRef.current.style.color = "blue"
    }

    function handleClick(e){


        let x = e.nativeEvent.offsetX / e.target.width
        let y = e.nativeEvent.offsetY / e.target.height

        placeMarker(x,y)
        setX(x)
        setY(y)
    }

    async function upload(){

        const newPoint = {
            name:point.name,
            id:point.id,
            x:x,
            y:y,
        }
        console.log(map)
        const newPoints = [...map.points.filter((point) => point.id !== pointID),newPoint]
        map.points = newPoints

        //Upload new Map
        await updateMap(mapID,map)
    }

    useEffect(()=>{
        load()
    },[])

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
            <div  className = "pointImage" ref={ImageRef}>
                <div  className = "icon"ref={MarkRef}>
                    <Icon path={mdiMapMarker}/>
                </div>
                <img className = "image"src={url} alt="warum" onClick={handleClick}></img>
            </div>
        </div>
    )
}

export default EditPoint