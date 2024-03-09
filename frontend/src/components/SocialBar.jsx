import { Link } from "react-router-dom";
import { useId } from "react";

const socials = [
  '/img/ig.svg',
  '/img/meta.svg',
  '/img/x.svg',
  '/img/phone.svg',
  '/img/wsp.svg'
]


export default function SocialBar(){
  const id = useId()
  return(
    <div className="flex gap-3">
      {
        socials.map((social, index) => (
          <Link key={`${id}-${index}`}>
            <div className="w-[48px] h-[48px] rounded-[50%] bg-white flex items-center justify-center">
              <img src={social} />
            </div>
          </Link>
        ))
      }
    </div>
  )
}