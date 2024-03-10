import NoticiaCard from "./NoticiaCard";

export default function Noticias(){
  return(
    <section className="bg-[#364855] h-[1050px] pt-[8rem] text-white px-[6.5rem]">
      <div>
        <h2 className="text-[3rem] font-semibold">Breakthroughs and breaking news</h2>  
        <hr className="h-px my-2 bg-gray-400 border-0" />
      </div>
      <div className="pt-8 flex gap-x-6 overflow-auto pb-7 ">
        <NoticiaCard />
        <NoticiaCard />
        <NoticiaCard />
        <NoticiaCard />
      </div>
    </section>
  )
}