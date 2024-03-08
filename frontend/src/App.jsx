import { Link, Route, Routes } from 'react-router-dom'
import './index.css'

export function Header(){
  return(
    <header className=' bg-[#364855] mx-auto h-24 flex px-24 py-2 fixed w-full shadow-[0_35px_60px_-15px_rgba(0,0,0,0.2)]' >
      <div className='flex items-center gap-10 w-full justify-center'>
        <div className='w-[220px]'>
          <Link to={'/'}>
            <img src='/logo.svg'/>  
          </Link>
        </div>

        <div className='w-full'>
          <nav>
            <ul className='flex text-white items-center justify-evenly mt-3 text-base font-light text-[23px]'>
              <li><Link to={'/nosotros'}>Nosotros</Link></li>
              <li><Link to={'/especialidades'}>Especialidades</Link></li>
              <li><Link to={'/servicios'}>Servicios</Link></li>
              <li><Link to={'/informacion-paciente'}>Información Paciente</Link></li>
              <li><Link to={'/agendar-hora'}>Reserva de hora</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export function Hero(){
  return(
    <article className="bg-[url('/img/hero.jpg')] h-[100dvh] text-white text-[70px] pl-24 ">
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

export function MainContent(){
  return (
    <>
      <Hero />
      <InfoSection />
    </>
  )
}

export function InformativeSquare(){
  return(
    <Link>
      <div className='h-[300px] w-[200px] bg-[#63717B] px-6 pb-9 pt-11 rounded-[20px] flex flex-col gap-3 h-40 text-white text-left '>
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

export function InfoSection(){
  return(
    <section className='font-rubik my-0 flex items-center flex-col text-white text-center pt-20 pb-16'>
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

export function Footer(){
  return(
    <footer className='bg-[#203442] text-white'>
      <div className='px-[32px] pt-[60px] pb-[90px]'>
        <div className='flex justify-center gap-16'> {/*section*/}
          <div className='flex flex-col gap-7'> {/*section*/}
            <div className='text-[1.3rem]'>
              Nosotros
            </div>
            <ul className='flex flex-col gap-7'>
              <li><Link>Nuestra clinica</Link></li>
              <li><Link>Sostenibilidad</Link></li>
              <li><Link>Sitios Relacionados</Link></li>
            </ul>
          </div>

          <div className='flex flex-col gap-7'> {/*section*/}
            <div className='text-[1.3rem]'>
              Nosotros
            </div>
            <ul className='flex flex-col gap-7'>
              <li><Link>Nuestra clinica</Link></li>
              <li><Link>Sostenibilidad</Link></li>
              <li><Link>Reglamento interno de funcionamiento</Link></li>
            </ul>
          </div>
          <div className='flex flex-col gap-7'> {/*section*/}
            <div className='text-[1.3rem]'>
              Nosotros
            </div>
            <ul className='flex flex-col gap-7'>
              <li><Link>Nuestra clinica</Link></li>
              <li><Link>Sostenibilidad</Link></li>
              <li><Link>Sitios Relacionados</Link></li>
            </ul>
          </div>
          <div className='flex flex-col gap-7'> {/*section*/}
            <div className='text-[1.3rem]'>
              Nosotros
            </div>
            <ul className='flex flex-col gap-7'>
              <li><Link>Nuestra clinica</Link></li>
              <li><Link>Sostenibilidad</Link></li>
              <li><Link>Sitios Relacionados</Link></li>
            </ul>
          </div>
          <div className='flex flex-col gap-7'> {/*section*/}
            <div className='text-[1.3rem]'>
              Nosotros
            </div>
            <ul className='flex flex-col gap-7'>
              <li><Link>Nuestra clinica</Link></li>
              <li><Link>Sostenibilidad</Link></li>
              <li><Link>Sitios Relacionados</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='h-[6.5rem] border-t-[1px] border-[#fff]/15 px-24 flex items-center'>
        <div className='w-[220px]'>
          <Link to={'/'}>
            <img src='/logo.svg'/>  
          </Link>
        </div>
      </div>
    </footer>
  )
}


export default function App() {
  return (
    <div className='font-rubik font-light text-left bg-[#364855]'>
      <Header />
      <Routes>
        <Route path='/' element={<MainContent />} />
      </Routes>
      <Footer />
    </div>
  )
}