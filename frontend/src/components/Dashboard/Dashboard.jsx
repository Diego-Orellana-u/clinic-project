import { useSelector } from 'react-redux'
import DashLayout from './DashLayout.jsx'


export default function Dashboard(){
  const mode = useSelector(state => state.dark.mode)

  return(
    <div className="h-[100vh] w-full bg-[#203442]">
      <DashLayout />
    </div>
  )
}