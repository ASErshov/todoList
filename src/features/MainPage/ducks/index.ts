import { Record, RecordInfo } from './../../../types';
import { createSlice, PayloadAction, Draft } from '@reduxjs/toolkit'


export type RecordsState ={
    records:{
        [key: string]: Array<RecordInfo>
    }
}

const initialState:RecordsState ={
    records: {},
}
export const reposSlice = createSlice({
    name: 'repo',
    initialState,
    reducers:{
        addRecord: (state: Draft<RecordsState>, action:PayloadAction<Record>): void =>{
            if (state.records[action.payload.date])
            state.records[action.payload.date]=[{text: action.payload.text, checked:false, id: (new Date()).getTime()}, ...state.records[action.payload.date]]
            else
            state.records[action.payload.date]=[{text: action.payload.text, checked:false, id: (new Date()).getTime()}]
        },
        moveRecord: (state: Draft<RecordsState>, action:PayloadAction<{date:string, index: number}>): void =>{
            state.records[action.payload.date].push({...state.records[action.payload.date].splice(action.payload.index, 1)[0],checked: true})
        },
        uncheckRecord:(state: Draft<RecordsState>, action:PayloadAction<{date:string, index: number}>): void =>{
            state.records[action.payload.date]=[{...state.records[action.payload.date].splice(action.payload.index, 1)[0],checked: false}, ...state.records[action.payload.date]]
        }
    }
})

export const { actions, reducer } = reposSlice

export default reducer