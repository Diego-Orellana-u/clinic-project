import { Link } from "react-router-dom";
import SocialBar from "./SocialBar";

export default function Footer(){
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

      <div className='h-[6.5rem] border-t-[1px] border-[#fff]/15 px-24 flex items-center text-white'>
        <div className='flex w-full justify-center'>
          <div className='relative'>
            <div className='w-[220px] absolute'>
              <Link to={'/'}>
                <img src='/logo.svg'/>  
              </Link>
            </div>
          </div>
          <div className='w-full flex justify-center'>
            <SocialBar />
          </div>
        </div>
      </div>
    </footer>
  )
}
