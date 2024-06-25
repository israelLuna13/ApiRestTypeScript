import { DiaryEntry, NonSensitiveInfoDiaryEntry, newDiaryEntry } from '../types'
import diaryData from './diaries.json'

//inicializamos el diario con los datos del json
const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

//retornamos todas entradas del diario 
export const getEntries=():DiaryEntry[]=> diaries

//buscamos un diario por id, puede retornar un diario o undefined
export const findById=(id:number):NonSensitiveInfoDiaryEntry|undefined=>{
    const entry = diaries.find(d=> d.id === id)
    if(entry != null)
        //si lo encuentra quitamos la propiedad comment y devolvemos el resto del diario
        {
            const {comment, ...restOfDiary} = entry
            return restOfDiary
        }
    return undefined
}

//retornamos los diarios sin la propiedad comment
export const getEntriesWithoutSensitiveInfo =():NonSensitiveInfoDiaryEntry[] => {
    //creamos un nuevo array con map , este array no tendra la propiedad comment
        return diaries.map(({id,date,weather,visibility})=>{
            return{
                id,
                date,
                weather,
                visibility
            }
    })}
//agregamos un nuevo diario    
export const addDiary = (newDiaryEntry:newDiaryEntry):DiaryEntry=> {
    const newDiary = {
        //al id mas alto le sumamaos 1 para que sea el siguiente id de la nueva entrada y metemos los demas datos del diario
        id:Math.max(...diaries.map(d=>d.id))+1,
        ...newDiaryEntry
    }
    diaries.push(newDiary)
    return newDiary
}
