import DaySquare from "./DaySquare";

export default function RowScheduler(){
  return(
    <div className='flex justify-between w-full'>
      <DaySquare />
      <DaySquare />
      <DaySquare />
      <DaySquare />
      <DaySquare />
      <DaySquare />
      <DaySquare />
    </div>
  )
}