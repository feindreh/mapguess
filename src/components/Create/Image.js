import { useEffect , useRef, useState} from "react"

import { getImageUrlFromId, uploadImage } from "../../firebase/firebase"

function Image(props){
    
    const {id,uploadMap,setHasImage} = props

    const [hasPicture,setHasPicture] = useState(false)
    const [url,setUrl] = useState()

    const fileRef = useRef()

    async function getPicture(){
        const url = await getImageUrlFromId(id)
        if(url){
            setUrl(url)
            setHasPicture(true)
            setHasImage(true)
        }else{
            setHasPicture(false)
        }
    }
    async function upload(){
        await uploadImage(id,fileRef.current.files[0])
        await uploadMap()
        setHasImage(true)
        getPicture()
        
    }
    useEffect(()=>{
        getPicture()
    },[])

    if(hasPicture){
        return(
            <div className = "imgWrap">
                <button className="button mid"type = "button" onClick={()=>{setHasPicture(false)}}>Bild ändern</button>
                <img className = "img" src={url} alt="image"></img>
            </div>
        )
    }else{
        return(
            <div >
                <button className = "mid button"type="button" onClick={upload}>upload</button>
                <input className = "mid content"ref={fileRef} type="file"></input>
            </div>
        )
    }
}

export default Image