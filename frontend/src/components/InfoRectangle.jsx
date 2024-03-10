
export default function InfoRectangle(){
  return(
    <article className="h-[500px] bg-[#4d5d68] text-white flex flex-col justify-center items-center gap-y-[2rem]">
      <div>
        <h2 className="text-[3rem]">
          Buscando una segunda opinion?
        </h2>
      </div>
      <div className="text-[1.2rem] w-[60%] text-center">
        <p>Cedars-Sinai’s Virtual Second Opinion service will empower you to make the best decisions for your health—and you can do it from the comfort of your home.</p>
      </div>
      <div>
        <button className="border-2 w-[250px] h-[60px] rounded-md text-[1.4rem] font-normal">
          Agenda una hora
        </button>
      </div>
    </article>
  )
}