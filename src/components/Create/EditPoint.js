import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router"
import { getImageUrlFromId, getMapSingle, getPoint} from "../../firebase/firebase"

import Icon from '@mdi/react';
import { mdiMapMarker } from '@mdi/js';

import "./EditPoint.css"

function EditPoint(){

    const {mapID,pointID} = useParams()

    const [url,setUrl] = useState()
    const [point,setPoint] = useState()
    const [place,setPlaced] = useState(false)
    const [x,setX] = useState()
    const [y,setY] = useState()
    
    const MarkRef = useRef()
    const ImageRef = useRef()

    async function load(){
        const newUrl = await getImageUrlFromId(mapID)
        setUrl(newUrl)
        const newMap = await getMapSingle(mapID)
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
    }

    function handleClick(e){

        let x = e.nativeEvent.offsetX / e.target.width
        let y = e.nativeEvent.offsetY / e.target.height

        placeMarker(x,y)
        setX(x)
        setY(y)
    }

    useEffect(()=>{
        load()
    },[])

    return(
        <div id="editPoint"> 
            <div>Wo ist {point?point.name:"Der Punkt"}</div>
            <button type="button">Speichern und zurück</button>
            <div className="imgwrap" ref={ImageRef}>
                <div className="icon ClickMark" ref={MarkRef}>
                    <Icon path={mdiMapMarker}/>
                </div>
                <img src={url} alt="warum" onClick={handleClick}></img>
            </div>
        </div>
    )
}

export default EditPoint