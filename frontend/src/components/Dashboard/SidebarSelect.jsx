import RightIcon from "../icons/RightIcon";



export default function SidebarSelect({ onClick, isActive, title, icon }){

  return(
    <div onClick={onClick} style={{backgroundColor: isActive ? '#4d5d68' : '#364855'}}  className="pl-[2rem] min-[375px]:pl-[3rem] h-[50px] flex items-center pr-[1rem]">
      {icon}
      <div className="flex items-center pt-[5px] pl-[2rem] w-full">
        <span className="text-[1.1rem]">{title}</span>
      </div>
      <div>
        <RightIcon />
      </div>
    </div>
  )
}

// const navigate = useNavigate()

// console.log(isActive)
// useEffect(() => {
//   if(isActive && title !== 'Dashboard'){
//     navigate(`/dashboard/${title.toLowerCase()}`)
//   }
// },[isActive])

