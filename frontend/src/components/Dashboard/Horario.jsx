import Scheduler from "./scheduler/Scheduler";

export default function Horario() {
  return (
    <article className="h-[calc(100vh-75px)]">
      <div className=" bg-white flex">
        <Scheduler />
      </div>
    </article>
  );
}
