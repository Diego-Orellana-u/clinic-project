import Scheduler from "./scheduler/Scheduler";

export default function Horario(){
  return(
    <article className="pt-[1.5rem] h-[calc(100vh-75px)]">
      <div className="border bg-white flex">
        <Scheduler />
      </div>
    </article>
  )
}