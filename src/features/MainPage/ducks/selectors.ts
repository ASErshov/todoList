import { AppState } from '../../../store/reducer'
import { RecordInfo } from '../../../types'

export const getRecords = (state: AppState): {[key: number]: Array<RecordInfo>} => state.records.records
