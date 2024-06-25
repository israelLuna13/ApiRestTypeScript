import { Visibility, Wather } from "./enums"

export interface DiaryEntry{
    id:number,
    date:string,
    weather:Wather,
    visibility:Visibility,
    comment:string
}

//export type NonSensitiveInfoDiayEntry = Pick<DiaryEntry,'id'|'date'|'wather'|'visibility'>

//esquema sin el comment
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>
//esquema sin el id
export type newDiaryEntry = Omit<DiaryEntry,'id'>