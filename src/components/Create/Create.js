import "./Create.css"

import { useEffect, useRef,useState } from "react"
import uniqid from "uniqid"
import { useParams } from "react-router"

import { updateMap,getMapSingle } from "../../firebase/firebase"

import Point from "./Point"
import Image from "./Image"

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

    const NameRef = useRef()


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
    function newPoint(){
        return{
            id:uniqid(),
            name:null,
            x:null,
            y:null,
        }
    }
    function upload(){
       updateMap(id,{
           name:name,
           id:id,
           points:points,
       });
    }

    
    return(
        <div id="create">
            <button type="button" onClick={upload}>Sichern</button>
            <label>Name dieser Karte</label>
            <input type="text" onChange={()=>{setName(NameRef.current.value)}} ref={NameRef} defaultValue={name} placeholder={"Name der Karte"}></input>
            <Image id={id}/>
            {points.map((point) => <Point key={point.id} point={point}/>)}
            <button type="button" onClick={()=>{setPoints([...points,newPoint()])}}>Neuer Punkt</button>
        </div>
    )
}

export default Create