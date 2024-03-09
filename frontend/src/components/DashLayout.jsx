import { Outlet } from "react-router-dom";


export default function DashLayout(){
  return(
    <>
      <div>
        <Outlet />
      </div>
    </>
  )
}