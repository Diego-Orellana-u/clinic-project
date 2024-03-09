import { Link } from "react-router-dom";

export function InformativeSquare(){
  return(
    <Link>
      <div className='h-[300px] w-[200px] bg-[#63717B] px-6 pb-9 pt-11 rounded-[20px] flex flex-col gap-3 text-white text-left '>
        <img src='/img/informativo1.png' />
        <div className=''>
          <h1 className='text-[1rem] leading-5 font-medium'>Agenda exámenes o procedimientos</h1>
        </div>
        <div>
          <p className='text-xs font-thin leading-4'>Reserva para atenderte presencial</p>
        </div>
      </div>
    </Link>
  )
}