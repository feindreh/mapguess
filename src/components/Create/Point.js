import { useRef } from "react"

function Point(props){

    const {point} = props
    
    const name = useRef()

    return (
        <div>
            <div>
                Punkt : 
            </div>
            <input onChange={()=>{point.name=name.current.value}} ref={name}type="text" defaultValue={point.name} placeholder={"Was soll gefunden werden"}></input>
            <button type="button">Diesen Punkt bearbeiten</button>
        </div>
    )
}

export default Point