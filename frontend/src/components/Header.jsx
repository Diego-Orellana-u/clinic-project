import { useId } from "react";
import { Link } from "react-router-dom";

const headerTitles = [
  {name: 'Nosotros', link: '/nosotros'},
  {name: 'Contacto', link: '/contacto'},
  {name: 'Servicios', link: '/servicios'},
  {name: 'Información Paciente', link: '/informacion-paciente'},
  {name: 'Reserva de hora', link: '/agendar-hora'},
]

export default function Header(){
  const id = useId()

  return(
    <header className='w-full sticky top-0'>
      <article className='bg-[#203442] text-white h-[2.3rem]'>
        <div className="flex items-center h-full pl-28 pt-2">
          <Link to={'/login'}>Iniciar Sesión</Link>
        </div>
      </article>
      <div className=' bg-[#364855] mx-auto h-24 flex px-24 py-2 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.2)] border-b-[1px] border-[#fff]/10' >
        <div className='flex items-center gap-10 w-full justify-center'>
          <div className='w-[220px]'>
            <Link to={'/'}>
              <img src='/logo.svg'/>  
            </Link>
          </div>

          <div className='w-full'>
            <nav>
              <ul className='flex text-white items-center justify-evenly mt-3 text-base font-light text-[23px]'>
                {
                  headerTitles.map((title, index) => (
                    <li key={`${id} - ${index}`}><Link to={title.link}>{title.name}</Link></li>
                  ))
                }
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}