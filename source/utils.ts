import {newDiaryEntry } from "./types";
import {Wather,Visibility} from './enums'

//---------------------------------------------------------------------------------------------
   //verificamos que los datos que nos lleguen sean del tipo de dato esperado

const parseComment = (commentFromRequest:any):string=>{
    if(!isString(commentFromRequest)){
        throw new Error('Incorrect or missing comment')
    }
    return commentFromRequest
}

const parseDate = (dateFromRequest:any):string=>{

    if(!isString(dateFromRequest)|| !isDate(dateFromRequest)){
        throw new Error('Incorrect or misssing date')
    }
    return dateFromRequest
}

const parseWeather =(weatherFromRequest:any):Wather=>{
    if(!isString(weatherFromRequest)|| !isWeather(weatherFromRequest)){
        throw new Error('Incorrect or missing Weather')

    }
    return weatherFromRequest
}

const parseVisibility =(visibilityFromRequest:any):Visibility=>{
    if(!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)){
        throw new Error('Incorrect or missing Visibility')
    }
    return visibilityFromRequest}

//---------------------------------------------------------------------------------------------    
const isWeather =(param:any):boolean=>{
    return Object.values(Wather).includes(param)
}
const isDate=(date:string):boolean=>{

    return Boolean(Date.parse(date))
}

const isString = (string:string):boolean =>{
    return typeof string === 'string'
}

const isVisibility = (param:any):boolean =>{
    return Object.values(Visibility).includes(param)
}


const toNewDiaryEntry = (object:any):newDiaryEntry=>{
    const newEntry:newDiaryEntry = {
        //checamos los datos que llegan del body
        date:parseDate(object.date),
        weather:parseWeather(object.weather),
        visibility:parseVisibility(object.visibility),
        comment:parseComment(object.comment)
    }
    return newEntry
}

export default toNewDiaryEntry