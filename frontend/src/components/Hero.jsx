import { Link } from "react-router-dom";

export function Hero(){
  return(
    <article className="bg-[url('/img/hero.jpg')] h-[82dvh] text-white text-[70px] pl-24 ">
      <div className='flex flex-col gap-4 justify-end h-full pb-20'>
        <div>
          <h1>Transformar el cuidado de tu salud</h1>  
        </div>
        <div className='flex'>
          <Link to={'/agendar-hora'} className='border-2 rounded-full p-2 text-lg px-6'>Agenda una hora</Link>
        </div>
      </div>
    </article>
  )
}
