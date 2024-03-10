import { InformativeSquare } from "./InformativeSquare.jsx";

export function InfoSection(){
  return(
    <section className='font-rubik my-0 flex items-center flex-col text-white text-center pt-20 pb-16 bg-[#364855]'>
      <div className='mb-5'>
        <span className='text-[3.2rem] font-semibold'>¿Qué tienes que hacer?</span>
        <p className='text-[1.5rem]'>Encuentra todo lo que tú y tu familia necesitan</p>
      </div>
      <div className='flex gap-6'>
        <InformativeSquare />
        <InformativeSquare />
        <InformativeSquare />
        <InformativeSquare />
      </div>
    </section>
  )
}