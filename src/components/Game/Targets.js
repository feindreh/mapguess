
import { useEffect, useState } from "react"

function Targtes(props){

    const {area,image,cb,color} = props

    const [height,setHeight] = useState()
    const [width,setWidth] = useState()

    useEffect(()=>{
        setHeight(image.offsetHeight);
        setWidth(image.offsetWidth);
    },[image.offsetHeight,image.offsetWidth])

    function getOp(){
        if(color ==="hide"){return 0}else return 1
    }
    
    return(
        <div onClick={cb} style={{
            "opacity":`${getOp()}`,
            "position":"absolute",
            "backgroundColor":`${color}`,
            "height":`${area.hi}px`,
            "width":`${area.le}px`,
            "transform" : `translate(${area.offX*width-(area.le/2)}px,${area.offY*height-(area.hi/2)}px)`,
            "top":"0",
            "left":"0"
        }}></div>
    )
}

export default Targtes