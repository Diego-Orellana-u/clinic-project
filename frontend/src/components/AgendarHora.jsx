

export default function AgendarHora() {
 return(
  <article className="bg-[#364855] h-[100dvh] text-white flex items-center flex-col">
    <div className="pt-12">
      <h2 className="text-[2.5rem]">Reserva de hora</h2>
    </div>

    <div className="w-[620px] h-full bg-[#63717B] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] flex flex-col items-center">
      <div className="pt-9">
        <span className="text-[1.3rem] font-light">Ingresa tus datos para reservar una hora</span>
      </div>

      <div>
        <form>
          <div className="flex flex-col pt-9">
            <label htmlFor="rut" className="text-lg">Rut</label>
            <input 
              type="text"
              id="rut"
              className="w-[500px] h-[40px] outline-none pl-2 text-black"
              placeholder="RUT del paciente"
            />
          </div>
          <div className="flex justify-center pt-8">
            <button type="button" className="bg-[#203442] px-8 py-3 text-[1.4rem] rounded-md">Buscar horas</button>
          </div>
        </form>
      </div>
    </div>

  </article>
 ) 
}