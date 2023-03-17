import uniqid from "uniqid"

export function newPoint(){
    return{
        id:uniqid(),
        name:null,
        areas:[]
    }
}

export function newArea(x,y){
    return{
        id:uniqid(),
        le:50,
        hi:50,
        offX:x,
        offY:y
    }
}


