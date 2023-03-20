
import { useState,useRef, useEffect } from "react"


import { getImageUrlFromId, getMapSingle } from "../../firebase/firebase";
import { useParams } from "react-router";

import Targtes from "./Targets";
import Advance from "./Advance";

function Game(){

    const [rerender,setRerender] = useState([])

    const {id} = useParams()
    const[loading,setLoading] = useState(true)

    async function load(){
        
        const url =await getImageUrlFromId(id)
        setUrl(url)
        const map = await getMapSingle(id)
        setMap(map)

        setActivePoint(map.points[0])
        setAreas(map.points[0].areas)
        
        setLoading(false)
    }

    useEffect(()=>{
        load()
    },[])

    const [map,setMap] = useState()
    const [url,setUrl] = useState()

    const [activePoint,setActivePoint] = useState()
    const [areas,setAreas] = useState([])

    const [count,setCount] = useState(0)
    const [finished,setFinished] = useState(false)
    const [color,setColor] = useState("hide")

    const ImageRef = useRef()

    function finishGame(){
        setFinished(true)
    }
    function advance(){
        setCount(count+1)
        if(count+1 === map.points.length){finishGame()}else{
          setActivePoint(map.points[count+1])  
          setAreas(map.points[count+1].areas)
        } 
        setColor("hide") 
    }
    function reset(){
        setActivePoint(map.points[0])
        setCount(0)
        setFinished(false)
    }
    function hit(e){
        setColor("green")
    }
    function miss(e){
        setColor("red")
    }

    useEffect(() => {
        //handle imageRef problems
        const timer = setInterval(() => {
            if(ImageRef.current!== undefined){
                setRerender([])
            }
        }, 500);
        return () => clearInterval(timer);
      }, []);

    if(loading){
        return (
            <div>Loading....</div>
        )
    }

    return(
        <div className = "listContainer game">
            <div >
                <div className="mid content">
                    {finished? ("Spiel vorbei") : (`Findest du ${activePoint.name}?`)}
                </div>
                <button className="mid button" type="button" onClick={reset}>
                    Neustart
                </button> 
            </div>
            <div  className = "pointImage" >
                <img onClick={miss}className="image" src={url} alt="warum" ref={ImageRef}></img>
                {ImageRef.current?(areas.map((area)=>{return <Targtes color={color}cb={hit} image={ImageRef.current} area = {area} key={area.id}/>})):<></>}
                <Advance cb={advance} color={color}/>
            </div>
        </div>
    )
}

export default Game
