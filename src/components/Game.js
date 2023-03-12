import "./Game.css"
import map from "../mapfirst.png"
import { useState,useRef } from "react"

import Icon from '@mdi/react';
import { mdiMapMarker } from '@mdi/js';

const Aufgaben = []
const questionFaktory = (x,y,name) => {
    return {
        x,y,name
    }
}
Aufgaben.push(questionFaktory(381 ,227,"Carl-Benz-Stadion"))
Aufgaben.push(questionFaktory(893 ,382,"Ilvesheimer Brücke"))
Aufgaben.push(questionFaktory(506 ,420,"SAP-Arena"))



function Game(){

    const [Targets,setTargets] = useState(Aufgaben)
    const [target,setTarget] = useState(Targets[0])
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
        if(count+1 === Targets.length){finishGame()}else{
          setTarget(Targets[count+1])  
        }
        
    }
    function reset(){
        setTarget(Targets[0])
        setCount(0)
        setScore(0)
        setFinished(false)
        TargetMarkerRef.current.style.visibility = "hidden"
        ClickedMarkerRef.current.style.visibility = "hidden"
    }
    function click(e){

        const baseWidth = 1000;
        const baseHeight = 494

        console.log(e.target.width)
        console.log(e.target.height)

        let xTarget = target.x * (e.target.width / baseWidth)
        let yTarget = target.y * (e.target.height / baseHeight)
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
    }
    function placeTarget(x,y){
        TargetMarkerRef.current.style.transform = `translate(${x-15}px,${y -28}px)`
        TargetMarkerRef.current.style.visibility = "visible"
    }

    return(
        <div id="Game">
            
            <div>Game</div>
            <div>
                {finished? "Spiel vorbei" : `Findest du ${target.name}?`}
            </div>
            <div>Punkte:{score}</div>
            <button type="button" onClick={reset}>Neustart</button> 
            <div className="imgwrap">
                <div className="icon TargetMark" ref={TargetMarkerRef}>
                    <Icon path={mdiMapMarker}/>
                </div>
                <div className="icon ClickMark" ref={ClickedMarkerRef}>
                    <Icon path={mdiMapMarker}/>
                </div>
                <img id="map"src={map} alt="Hi" onClick={finished? ()=>{}:click}></img>
            </div>
        </div>
    )
}

export default Game
