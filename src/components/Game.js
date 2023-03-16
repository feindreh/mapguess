
import { useState,useRef, useEffect } from "react"

import Icon from '@mdi/react';
import { mdiMapMarker } from '@mdi/js';
import { getImageUrlFromId, getMapSingle } from "../firebase/firebase";
import { useParams } from "react-router";


function Game(){

    const {id} = useParams()
    const[loading,setLoading] = useState(true)

    async function load(){
        //load map
        const map = await getMapSingle(id)
        setMap(map)
        //set Active Point
        setActivePoint(map.points[0])
        //load image
        const image =await getImageUrlFromId(id)
        setImage(image)
        setLoading(false)
    }

    useEffect(()=>{
        load()
    },[])

    const [map,setMap] = useState()
    const [image,setImage] = useState()

    const [activePoint,setActivePoint] = useState()

    const [count,setCount] = useState(0)
    const [score,setScore] = useState(0)
    const [finished,setFinished] = useState(false)

    const TargetMarkerRef = useRef()
    const ClickedMarkerRef = useRef()

    function finishGame(){
        setFinished(true)
    }
    function advance(points){
        setScore(score+points)
        setCount(count+1)
        if(count+1 === map.points.length){finishGame()}else{
          setActivePoint(map.points[count+1])  
        }
        
    }
    function reset(){
        setActivePoint(map.points[0])
        setCount(0)
        setScore(0)
        setFinished(false)
        TargetMarkerRef.current.style.visibility = "hidden"
        ClickedMarkerRef.current.style.visibility = "hidden"
    }
    function click(e){

        let xTarget = activePoint.x * e.target.width
        let yTarget = activePoint.y * e.target.height
        let xClick=e.nativeEvent.offsetX
        let yClick=e.nativeEvent.offsetY

        let xDif = Math.abs(xClick-xTarget)
        let yDif = Math.abs(yClick-yTarget)

        let points  
        let hit 

        if((xDif>15) || (yDif>15)){
            points = 100-(
                    Math.floor(
                        Math.pow(
                            ((xDif+yDif+40-20)/40),2.5
                        )
                    )
                )
            if(points<0){points=0}
            hit = false
        }else{
            points = 100
            hit = true
        }
        if(hit===false){console.log("Daneben","Du hast",points,"erhalten!")}else{console.log("Treffer!",points,"Punkte")}
        
        placeClick(xClick,yClick)
        placeTarget(xTarget,yTarget)
        advance(points)
    }
    function placeClick(x,y){
        ClickedMarkerRef.current.style.transform = `translate(${x-15}px,${y -28}px)`
        ClickedMarkerRef.current.style.visibility = "visible"
        ClickedMarkerRef.current.style.color = "black"
    }
    function placeTarget(x,y){
        TargetMarkerRef.current.style.transform = `translate(${x-15}px,${y -28}px)`
        TargetMarkerRef.current.style.visibility = "visible"
        TargetMarkerRef.current.style.color = "red"
    }


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
                <div className="mid content">
                    Punkte: {score}
                </div>
                <button className="mid button" type="button" onClick={reset}>
                    Neustart
                </button> 
            </div>
            
            <div  className = "pointImage">
                <div className = "icon" ref={TargetMarkerRef}>
                    <Icon path={mdiMapMarker}/>
                </div>
                <div className = "icon" ref={ClickedMarkerRef}>
                    <Icon path={mdiMapMarker}/>
                </div>
                <img className = "image" src={image} alt="Hi" onClick={finished? ()=>{}:click}></img>
            </div>
        </div>
    )
}

export default Game
