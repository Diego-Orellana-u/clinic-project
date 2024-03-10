import { Link } from "react-router-dom"
import bloodPresure from "../assets/bloodPresure.jpg"
import arrow from '/img/arrow.svg'

export default function NoticiaCard(){

  const desc = `When stocking up on the necessities for life with a newborn—diapers, onesies, cute beanies and snuggly 
  blankets—consider adding an important self-care item to your list: a home blood pressure cuff.`


  return(
    <Link>
      <div className="bg-[#4d5d68] h-[620px] w-[360px] rounded-3xl">
        <div className="rounded-xl overflow-hidden">
          <div>
            <img src={bloodPresure} className="aspect-[4/3] object-cover" />
          </div>

          <div className="p-[32px] flex flex-col gap-[1rem]">
            <div>
              <h3 className="text-[25px] font-normal">
                New Baby? Pick Up a New Blood Pressure Cuff, Too
              </h3>
            </div>

            <div>
              <p>
                {desc.substring(0,150) + '...'}
              </p>
            </div>

            <div>
              <button className="h-[50px] w-[50px] rounded-full bg-[#fff] flex items-center justify-center">
                <img src={arrow} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}