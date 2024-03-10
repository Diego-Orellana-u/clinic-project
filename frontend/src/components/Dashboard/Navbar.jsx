import search from '/img/search.svg'
import setting from '/img/setting.svg'
import moon from '/img/moon.svg'
import MenuIcon from '../icons/MenuIcon'


export default function Navbar({ setActiveSidebar, activeSidebar}){

  return(
    <section className='h-[50px] flex items-center px-4 justify-between'>
      <div className='flex'>
        <div className='flex items-center gap-x-[.5rem]'>
          <div> 
            <MenuIcon onClick={() => setActiveSidebar(!activeSidebar)} />
          </div>
          <div>
            <input 
              type='text'
              className='bg-[#4d5d68] h-[30px] w-[150px] min-[375px]:w-[200px] rounded-lg pl-3 pt-1 text-white outline-none'
              placeholder='Buscar...'
            />
          </div>
          <img src={search} />
        </div>
      </div>

      <div className='flex'>
        <div>
          <img src={moon} />
        </div>
        <div>
          <img src={setting} />
        </div>
      </div>
    </section>
  )
}