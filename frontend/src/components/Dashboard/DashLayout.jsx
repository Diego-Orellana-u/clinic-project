import { Outlet } from "react-router-dom"
import Navbar from './Navbar.jsx'
import DashSidebar from "./DashSidebar.jsx"
import { useState } from "react"

const DashLayout = () => {

  const [ activeSidebar, setActiveSidebar ] = useState(true)

  return (
    <>
      <Navbar activeSidebar={activeSidebar} setActiveSidebar={setActiveSidebar} />
      <DashSidebar activeSidebar={activeSidebar} setActiveSidebar={setActiveSidebar} />
      <Outlet />
    </>
  )
}

export default DashLayout
