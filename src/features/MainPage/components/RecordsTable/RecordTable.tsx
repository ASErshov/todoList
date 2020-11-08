import React, {useState} from 'react'
import { ClassNameFormatter, cn } from '@bem-react/classname'

import './RecordTable.css'
import { useDispatch, useSelector } from 'react-redux'
import { getRecords } from '../../ducks/selectors'
/* eslint-disable import/no-duplicates */
import { ru } from 'date-fns/locale'
import { format, parseISO } from 'date-fns'
import { Dispatch } from 'redux'
import { actions } from '../../ducks'
import { RecordInfo } from '../../../../types'

export type RecordsProps ={
    parentCn: ClassNameFormatter
}

const RecordsTable: React.FC<RecordsProps> = ({parentCn}): React.ReactElement =>{
    const records = useSelector(getRecords)
    const dispatch: Dispatch = useDispatch()

    const handleCheck = (date: string, index: number)=>{
        return (e:React.ChangeEvent<HTMLInputElement>)=>{
            if (e.target.checked)
            dispatch(actions.moveRecord({
                date,
                index
            }))
            else
            dispatch(actions.uncheckRecord({
                date,
                index
            }))
        }
    }

    return(<>
            {Object.entries(records).sort((a: [string, Array<RecordInfo>], b: [string, Array<RecordInfo>])=>(new Date(a[0])).getTime() - (new Date (b[0])).getTime() )
            .map((recordsGroup: [string, Array<RecordInfo>])=>(
                <div className={parentCn('DateGroup')} key={recordsGroup[0]}>
                    <span className={parentCn('DateGroup-Date')}>{format(parseISO(recordsGroup[0]), 'dd MMMM yyyy', { locale: ru })}</span>
                    {recordsGroup[1].map((item:RecordInfo, index: number)=>(
                        <div key={index} className={parentCn('DateGroup-Record')}>
                            <span className={parentCn('DateGroup-Record-Text', {
                                decoration: item.checked??''
                            })}>{item.text}</span>
                            <input type='checkbox' checked={item.checked} onChange={handleCheck(recordsGroup[0], index)}/>
                        </div>
                    ))}
                </div>
            )
            )}
            </>
    )
}

export default RecordsTable