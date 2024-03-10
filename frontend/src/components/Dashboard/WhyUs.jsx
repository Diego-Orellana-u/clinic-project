import { Link } from 'react-router-dom'
import doctorImg from '../../assets/doctorImg.avif'



export default function WhyUs(){
  return(
    <article className="bg-[#4d5d68] py-[8rem] text-white">
      <div className='flex flex-1 lg:px-[11rem] sm:px-[2rem] justify-center'>
        <div className="pt-[1rem] lg:pt-[7rem] w-[50%] pr-[2rem] lg:pr-[10rem]">
          <div className='pb-4'>
            <h2 className='font-semibold sm:text-[1.5rem] lg:text-[2.5rem] lg:leading-[3.2rem]'>La recuperación empieza aquí</h2>
          </div>

          <div className='text-[15px] lg:text-[19px] leading-[1.9rem] pb-10'>
            <span>Las respuestas correctas, desde el principio.</span>
            <p className='pb-[2rem]'>
              La eficacia del tratamiento depende del diagnóstico correcto. 
              Nuestros expertos diagnostican y tratan los problemas médicos más complicados.
            </p>

            <p>
            Entre los primeros puestos en EE. UU. 
            Mayo Clinic clasifica más veces en el n. ° 1 que ningún otro hospital del país, 
            según U.S. News & World Report. 
            </p>
          </div>
          
          <div className='flex'>
            <Link to={'/agendar-hora'} className='border-2 rounded-full p-2 text-lg px-6 '>¿Por qué elegir clinica Londres?</Link>
          </div>
        </div>

        <div className='w-60% rounded-xl overflow-hidden'>
          <img src={doctorImg} className='aspect-[3/4] max-h-[90vh] object-cover' />
        </div>
      </div>
    </article>
  )
}