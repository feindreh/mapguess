import { getStorage, ref ,uploadBytes,getDownloadURL} from "firebase/storage";
import { collection, doc, getDoc, getDocs, getFirestore, setDoc } from "firebase/firestore"; 
import app from "./app";

;
// storage

export async function getImageUrlFromName(name){
    const storage = getStorage();
    const storageRef = ref(storage, name);

    const url = await getDownloadURL(storageRef)

    return url
}

export async function uploadImage(name,file){

    const storage = getStorage();
    const storageRef = ref(storage, name);

    await uploadBytes(storageRef,file).then((snapshot) => {
    console.log(snapshot);
    });
}

// Firestore

const db = getFirestore(app);

export async function updateMap(id,obj){
    await setDoc(doc(db, "map" ,id), obj);
    console.log("save")
}

export async function getMapCollection(){
    const maps = await getDocs(collection(db, "map"));

    const mapArray = []
    maps.forEach((map) => {
      mapArray.push(map.data())
  })

    return mapArray
}

export async function getMapSingle(id){
    const docRef = doc(db,"map",id)
    const Map = await getDoc(docRef)
    return Map.data()
}


