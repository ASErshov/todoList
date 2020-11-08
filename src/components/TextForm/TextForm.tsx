import React, {useState} from 'react'
import { cn } from '@bem-react/classname'
import { Record } from '../../types'

import './TextForm.css'

export type TextFormProps = {
    handlePush(record:Record): void,
    buttonTex?: string
    label?: string
}

const TextForm: React.FC<TextFormProps> = ({handlePush, buttonTex='Добавить',label}): React.ReactElement =>{
    const cnTextForm = cn('TextForm')

    const [error, setError] = useState(false)

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        if(e.currentTarget.text.value.length && e.currentTarget.date.value.length){
            handlePush({
                text: e.currentTarget.text.value,
                date: e.currentTarget.date.value
            })
            setError(false)
            e.currentTarget.text.value = ''
            e.currentTarget.date.value = null
        }
        else
            setError(true)
    }

    return(
        <form onSubmit={handleSubmit} className={cnTextForm()}>
        {label && <span className={cnTextForm('Label')}>{label}</span>}
        <textarea name="text" className={cnTextForm('Text')}/>
        <input type='date' name="date"  min="2020-01-01" className={cnTextForm('Date')}/>
        <button type='submit' className={cnTextForm('Button')}>{buttonTex}</button>
        {error && <span className={cnTextForm('Error')}>Заполните все поля</span>}
        </form>
    )
}

export default TextForm