import { useEffect, useRef,useState } from "react"

function Name(props){

    const {name,setName} = props

    const [newName,setNewName] = useState(false)

   useEffect(
    ()=>{
        if(name === null){
            setNewName(true)
        }
    }
    ,[])

    const inputRef = useRef()

    if(newName === true){
        return(
                <div style={{
                    "display":"flex",
                    "gap":"20px"
                    }}>
                    <input className="mid content" ref={inputRef} type="text" defaultValue={name} placeholder={"Name der Karte"}/>
                    <button className="mid button" type="button" onClick={()=>{setName(inputRef.current.value);setNewName(false)}}>Name benutzen</button>
                </div>
            )
    }else{
        return(
            <div style={{
                "display":"flex",
                "gap":"20px"
                }}>

                <div className="mid content">{name}</div>
                <button className="mid button" type="button" onClick={()=> {setNewName(true)}}>Name ändern</button>
                
            </div>
        )
    }
    
}

export default Name
