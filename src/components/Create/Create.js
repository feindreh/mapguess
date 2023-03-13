import "./Create.css"

import { useRef,useState } from "react"

import uploadImage from "../../firebase/picture"


function Create(){


    const [stage,setStage] = useState(1)

    const [pickedFile,setPickedFile] = useState()
    const [name,setName] = useState()
    const [filePicked,setFilePicked] = useState(false)



    const pictureRef = useRef()
    const nameRef = useRef()


    async function upload(){
        await uploadImage(name,pickedFile)
        setPickedFile()
        setName()
        setFilePicked(false)
    }
    function handleTextInput(){
        setName(nameRef.current.value)  
    }
    function handleImageInput(){
        const image = pictureRef.current.files[0]
        if(image){
            setFilePicked(true)
            setPickedFile(pictureRef.current.files[0])      
        }else{
            setFilePicked(false)
        }  
    }

    if(stage===1){
        return(
            <div>
                <button type="button">Create New Map</button>
                <button type="button">Edit Map</button>
            </div>
        )
    }

    return(
        <div>
            <button type="button" onClick={()=>{console.log(name,pickedFile)}}>Log Picked file</button>
            <button type="button" onClick={upload}>Upload</button>
            <input type="file" ref={pictureRef} onChange={handleImageInput}/>
            {filePicked? ("Uploaded"):("Upload something")}
            <input type="text" ref={nameRef} onChange={handleTextInput}></input>
        </div>
    )
}

export default Create