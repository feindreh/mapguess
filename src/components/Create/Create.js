

import { useEffect,useState } from "react"
import uniqid from "uniqid"
import { useParams } from "react-router"

import { updateMap,getMapSingle } from "../../firebase/firebase"

import Point from "./Point"
import Image from "./Image"
import Name from "./Name"

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

            <button className = " mid button"type="button" onClick={upload}>Karte Sichern</button>

            <Name name ={name} setName = {setName}/>

            {/* <Image id={id}/>


            {points.map((point) => <Point upload={upload}deletePoint={deletePoint}key={point.id} point={point} mapID={id}/>)}
            <button type="button" onClick={()=>{setPoints([...points,newPoint()])}}>Neuer Punkt</button> */}

        </div>
    )
}

export default Create