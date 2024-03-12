import { useState, useContext, useEffect } from 'react'
import CalendarHeader from './CalendarHeader.jsx'
import CalendarMonth from './CalendarMonth.jsx'
import CalendarSideBar from './CalendarSidebar.jsx'
import { getMonth } from '../../../data/arrayDays.js'
import GlobalContext from '../../../context/GlobalContext.jsx'


export default function Scheduler(){
  
  const [ currentMonth, setCurrentMonth ] = useState(getMonth())
  const { monthIndex } = useContext(GlobalContext)
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex))
  },[monthIndex])
  return(
    <>
      <div className='h-[calc(100vh-75px)] flex flex-col flex-1 '>
        <CalendarHeader />
        <div className='flex flex-1'>
          <CalendarSideBar />
          <CalendarMonth month={currentMonth}/>
        </div>
      </div>
    </>
  )
}