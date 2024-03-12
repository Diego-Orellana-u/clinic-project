import { useState } from "react";
import SidebarSelect from "./SidebarSelect";
import { sidebarSections } from "../../data/sidebarSections.jsx";
import { Link } from "react-router-dom";
import MenuIcon from "../icons/MenuIcon.jsx"

export default function DashSidebar({ setActiveSidebar, activeSidebar}){

  const [ activeIndex, setActiveIndex ] = useState(0)

  const handleActive = (num) => {
    setActiveIndex(num)
  }
  
  return (
    <article className="fixed top-0 left-0 w-[80%] min-[425px]:w-[350px] bg-[#364855] min-h-[100vh] text-white transition ease-linear duration-300" style={{transform: activeSidebar ? "" : `translateX(-500px)`}}>
      <div className="h-[75px] pl-[2rem] min-[375px]:pl-[3rem] flex items-center ">
        <h3 className="text-2xl pr-[2.5rem]">CLINICA LONDRES</h3>
        <div className="pb-[.3rem]">
          <MenuIcon onClick={() => setActiveSidebar(!activeSidebar)} />
        </div>
      </div>

      <div>
        {
          sidebarSections.map((section) => (
            <div key={section.title} className="mb-[2rem]">
              <span className="pl-[2rem] min-[375px]:pl-[3rem]">{section.title}</span>
              {
                section.subSections.map(([title, index, icon, link]) => (
                  <Link to={link} key={title}>
                    <SidebarSelect onClick={() => handleActive(index, title)} isActive={activeIndex == index} title={title} icon={icon}/>
                  </Link>
                ))
              }
            </div>
          ))
        }
      </div>
    </article>
  );
}