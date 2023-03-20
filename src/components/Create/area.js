
import { useEffect, useState } from "react"

function Area(props){

    const {area,image} = props

    const [height,setHeight] = useState()
    const [width,setWidth] = useState()

    useEffect(()=>{
        setHeight(image.offsetHeight);
        setWidth(image.offsetWidth);
    },[image.offsetHeight,image.offsetWidth])

    
    return(
        <div style={{
            "position":"absolute",
            "backgroundColor":"rgba(255, 0, 0, 0.756)",
            "border":"solid black 4px",
            "height":`${area.hi}px`,
            "width":`${area.le}px`,
            "transform" : `translate(${area.offX*width-(area.le/2)}px,${area.offY*height-(area.hi/2)}px)`,
            "top":"0",
            "left":"0"
        }}></div>
    )
}

export default Area

