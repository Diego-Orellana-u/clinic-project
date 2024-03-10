import { Outlet } from "react-router-dom"
import Navbar from './Navbar.jsx'

const DashLayout = () => {


  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default DashLayout
