import "./Create.css"

import { useRef,useState } from "react"

function Create(){


    const [pickedFile,setPickedFile] = useState()
    const [filePicked,setFilePicked] = useState(false)



    const pictureRef = useRef()



    function handleImage(){
        const image = pictureRef.current.files[0]
        if(image){
          setFilePicked(true)
          setPickedFile(image)  
        }
        
    }
    return(
        <div>
            <button type="button" onClick={()=>{console.log(pickedFile)}}>Log Picked file</button>
            <button type="button" onClick={handleImage}>Upload</button>
            <input type="file" ref={pictureRef}/>
            {filePicked? ("Uploaded"):("Upload something")}
        </div>
    )
}

export default Create