

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
    function deletePoint(id){
        const oldState = [...points]
        const newState = oldState.filter((point) => point.id!==id)
        setPoints(newState)
    }
    
    return(
        <div id="create" className="listContainer">

            <button type="button" onClick={upload}>Karte Sichern</button>

            <Image id={id}/>

            <label className="todo">
                <div>Name der Karte</div>
                <input className="name"type="text" onChange={()=>{setName(NameRef.current.value)}} ref={NameRef} defaultValue={name} placeholder={"Name der Karte"}></input>
            </label>
            
            

            {points.map((point) => <Point upload={upload}deletePoint={deletePoint}key={point.id} point={point} mapID={id}/>)}

            <button type="button" onClick={()=>{setPoints([...points,newPoint()])}}>Neuer Punkt</button>

        </div>
    )
}

export default Create