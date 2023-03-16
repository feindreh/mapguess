import { useEffect, useRef,useState } from "react"

function Name(props){

    const {name,setName} = props

    const [newName,setNewName] = useState(false)

   useEffect(
    ()=>{
        if(name === null){
            setNewName(true)
        }else{setNewName(false)}
    }
    ,[name])

    const inputRef = useRef()

    function handleNameChange(){
         if(inputRef.current.value !==""){
            setName(inputRef.current.value);setNewName(false)

        }
    }
    
    if(newName === true){
        return(
                <div style={{
                    "display":"flex",
                    "gap":"20px"
                    }}>
                    <input className="mid content" ref={inputRef} type="text" defaultValue={name} placeholder={"Name der Karte"}/>
                    <button className="mid button" type="button" onClick={handleNameChange}>Name benutzen</button>
                </div>
            )
    }else{
        return(
                <div className="big button" onClick={()=>{setNewName(true)}}>{name}</div>
        )
    }
    
}

export default Name
