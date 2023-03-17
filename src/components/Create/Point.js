import { useEffect, useRef,useState } from "react"
import { Link } from "react-router-dom"

import Icon from '@mdi/react';
import { mdiCheckBold,mdiExclamationThick } from '@mdi/js';

function Point(props){

    const {point,deletePoint,mapID,upload} = props
    
    const [check,setCheck] = useState(false)

    useEffect(()=>{
        checkRef.current.style.position = "absolute"
        checkRef.current.style.transform = "translate(-100%,0)"
        checkRef.current.style.height = "calc(var(--midtext)*5)"
        checkRef.current.style.width = "calc(var(--midtext)*5)"
        checkRef.current.style.backgroundColor = "white"
        checkCheck()
    }
    ,[point.x,point.y])

    function checkCheck(){
            if(point.x!==null && point.y!==null && point.name!=="" && point.name !==null){
                        setCheck(true)
                        checkRef.current.style.color = "green"
                    }else{
                        setCheck(false)
                        checkRef.current.style.color = "red"
                    }
        }

    const checkRef=useRef()

    const name = useRef()

    return (
        <div className="point">
            <Icon ref={checkRef} path={check?mdiCheckBold:mdiExclamationThick} size={1} />
            <div className="inputwrap">  
                <input className="mid content"onChange={()=>{point.name=name.current.value;checkCheck()}} ref={name}type="text" defaultValue={point.name} placeholder={"Was soll gefunden werden"}></input>
            </div>
            <div className="buttonWrap">
                <Link onClick={upload}className="link button mid" to={`/editPoint/${mapID}/${point.id}`}>
                                Bearbeiten
                </Link>
                <div className ="link mid button" onClick={()=>{deletePoint(point.id)}}>Löschen</div>
            </div>
        </div>
    )
}

export default Point