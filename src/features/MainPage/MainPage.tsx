import React from 'react';
import {Dispatch} from 'redux'
import { useDispatch } from 'react-redux';
import { Record } from '../../types';
import { actions } from './ducks';
import TextForm from '../../components/TextForm';
import RecordsTable from './components/RecordsTable';
import './MainPage.css';
import { cn } from '@bem-react/classname';
const MainPage: React.FC = (): React.ReactElement =>{
  const cnMainPage = cn('MainPage')
  const dispatch: Dispatch = useDispatch()

  const handlePush =(record:Record)=>{
    dispatch(actions.addRecord(record))
  }
  
  return (    
  <div className={cnMainPage()}>
    <div className={cnMainPage('SideBar')} ><TextForm handlePush={handlePush} label={'Добавить запись'}/></div>
    <div className={cnMainPage('Content')}><RecordsTable parentCn = {cnMainPage}/></div>
  </div>
  );
}

export default MainPage;