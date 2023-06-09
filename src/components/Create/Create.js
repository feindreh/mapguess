

import { useEffect,useState } from "react"
import uniqid from "uniqid"
import { useParams } from "react-router"

import { updateMap,getMapSingle } from "../../firebase/firebase"

import Point from "./Point"
import Image from "./Image"
import Name from "./Name"

import { newPoint } from "../../Picker.js/pick"

function Create(){
    
    const {paramId} = useParams()

    function getId(){
        if(paramId===undefined){
            return uniqid()
        }else{
            return paramId
        }
    }

    const [id,setId] = useState(getId())
    const [name,setName] = useState(null)
    const [points,setPoints] = useState([newPoint()])
    const [hasImage,setHasImage] = useState(false)

    async function load(){
        const map = await getMapSingle(id)
        setName(map.name)
        setPoints(map.points)
    }
    useEffect(()=>{
        if(paramId !== undefined){
        load() 
        }
    },[])

    function upload(){
       updateMap(id,{
           name:name,
           id:id,
           points:points,
       });
    }
    function deletePoint(id){
        const oldState = [...points]
        const newState = oldState.filter((point) => point.id!==id)
        setPoints(newState)
    }
    function addNewPoint( setPoints,points,newPoint){
        setPoints([...points,newPoint()])
    }
    
    return(
        <div id="create" className="listContainer">

            <button className = " mid button"type="button" onClick={upload}>Karte Sichern</button>

            <Name name ={name} setName = {setName}/>

            {name?<Image id={id} setHasImage={setHasImage} uploadMap={upload}/>:<></>}

            {hasImage?points.map((point) => <Point newPoint={newPoint}upload={upload}deletePoint={deletePoint}key={point.id} point={point} mapID={id}/>):<></>}
            {hasImage?<button className="mid button" type="button" onClick={()=>addNewPoint(setPoints,points,newPoint)}>Neuer Punkt</button>:<></>}

        </div>
    )
}

export default Create