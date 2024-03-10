
import menu from '/img/menu.svg'
import search from '/img/search.svg'
import setting from '/img/setting.svg'
import moon from '/img/moon.svg'


export default function Navbar({
  isSidebarOpen,
  setIsSidebarOpen
}){

  return(
    <section className='h-[50px] flex items-center px-4 justify-between'>
      <div className='flex'>
        <div className='flex items-center gap-x-[.5rem]'>
          <div> 
            <img src={menu}/>
          </div>
          <div>
            <input 
              type='text'
              className='bg-[#4d5d68] h-[30px] rounded-lg pl-3 pt-1'
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