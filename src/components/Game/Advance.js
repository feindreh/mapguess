function Advance(props){
    const {color,cb} = props

    function getVisible(){
        if(color === "hide"){return "hidden"}
        return "visible"
    }

    function getColor(){
        if(color === "green"){return "green"}
        if(color === "red"){ return "red"}
    }

    return (
        <button onClick = {cb} className="mid button" style={{
            "position":"absolute",
            "backgroundColor":`${getColor()}`,
            "top":"50%",
            "left":"50%",
            "transform":"translate(-50%,-50%)",
            "padding":"50px",
            "visibility":`${getVisible()}`
        }}>Weiter</button>
    )
}

export default Advance