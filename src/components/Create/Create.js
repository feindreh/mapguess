import "./Create.css"

import { useEffect, useRef,useState } from "react"
import uniqid from "uniqid"
import { useParams } from "react-router"

import { updateMap,getMapSingle  } from "../../firebase/firebase"

import Point from "./Point"


function Create(){
    
    const {paramId} = useParams()

    function getId(){
        if(paramId===undefined){
            return uniqid()
        }else{
            return paramId
        }
    }
    function getName(){
        return null
    }
    function getPoints(){
        return newPoint()
    }

    const [id,setId] = useState(getId())
    const [name,setName] = useState(getName())
    const [points,setPoints] = useState([getPoints()])

    async function load(){
        const map = await getMapSingle(id)
        setName(map.name)
        setPoints(map.points)
    }

    useEffect(()=>{
        //get the right map 
        load()
        //setState it 
    },[])

    const NameRef = useRef()


    function uploadMap(){
       updateMap(id,{
           name:name,
           id:id,
           points:points,
       })
    }
    function newPoint(){
        return{
            id:uniqid(),
            name:null,
            x:null,
            y:null,
        }
    }

    return(
        <div>
            <button type="button" onClick={uploadMap}>Sichern</button>
            <label>Name dieser Karte</label>
            <input type="text" onChange={()=>{setName(NameRef.current.value)}} ref={NameRef} defaultValue={name} placeholder={"Name der Karte"}></input>
            {points.map((point) => <Point key={point.id} point={point}/>)}
            <button type="button" onClick={()=>{setPoints([...points,newPoint()])}}>Neuer Punkt</button>
        </div>
    )
}

export default Create