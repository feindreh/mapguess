import { useEffect, useRef,useState } from "react"
import { Link } from "react-router-dom"

function Point(props){

    const {point,deletePoint,mapID,upload} = props
    
    const [check,setCheck] = useState(false)

    useEffect(()=>{
        checkRef.current.style.position = "absolute"
        checkRef.current.style.transform = "translate(-100%,0)"
        checkRef.current.style.height = "calc(var(--midtext)*3)"
        checkRef.current.style.width = "calc(var(--midtext)*3)"
        checkRef.current.style.border = "solid black 2px"
        checkRef.current.style.width = checkRef.current.offsetWidth
        if(point.x!==null && point.y!==null){
            setCheck(true)
            checkRef.current.style.backgroundColor = "green"
        }else{
            setCheck(false)
            checkRef.current.style.backgroundColor = "red"
        }
    }
    ,[point.x,point.y])

    const checkRef=useRef()

    const name = useRef()

    return (
        <div className="point">
            <div ref={checkRef} className="check">{check?"Good":"Bad"}</div>
            <div className="inputwrap">  
                <input className="mid content"onChange={()=>{point.name=name.current.value}} ref={name}type="text" defaultValue={point.name} placeholder={"Was soll gefunden werden"}></input>
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