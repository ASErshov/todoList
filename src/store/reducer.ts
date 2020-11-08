import { CombinedState, combineReducers, Reducer } from '@reduxjs/toolkit'

import records, { RecordsState } from '../features/MainPage/ducks'

export type AppState = {
    records: RecordsState
}

export default (): Reducer<CombinedState<AppState>> =>
  combineReducers<AppState>({
    records
})