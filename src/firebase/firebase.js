import { getStorage, ref ,uploadBytes,getDownloadURL} from "firebase/storage";
import { collection, doc, getDoc, getDocs, getFirestore, setDoc } from "firebase/firestore"; 
import app from "./app";

;
// storage

export async function getImageUrlFromId(id){
    console.log("load")
    try{
        const storage = getStorage();
        const storageRef = ref(storage, id);

        const url = await getDownloadURL(storageRef)

        return url
    }catch{
        console.log("no image found")
        return false
    }
    
}

export async function uploadImage(id,file){
    console.log("save")

    const storage = getStorage();
    const storageRef = ref(storage, id);

    await uploadBytes(storageRef,file)
}

// Firestore

const db = getFirestore(app);

export async function updateMap(id,obj){
    await setDoc(doc(db, "map" ,id), obj);
    console.log("save")
}

export async function getMapCollection(){
    console.log("load")
    const maps = await getDocs(collection(db, "map"));

    const mapArray = []
    maps.forEach((map) => {
      mapArray.push(map.data())
  })

    return mapArray
}

export async function getMapSingle(id){
    console.log("load")
    const docRef = doc(db,"map",id)
    const Map = await getDoc(docRef)
    return Map.data()
}




