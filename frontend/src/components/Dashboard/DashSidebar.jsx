import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "../FlexBetween";
import profileImage from "../../assets/profile.jpeg"

const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    text: "Usuario",
    icon: null,
  },
  {
    text: "Horas Medicas",
    icon: <ShoppingCartOutlined />,
  },
  {
    text: "Pacientes",
    icon: <Groups2Outlined />,
  },
  {
    text: "Ventas",
    icon: null,
  },
  {
    text: "General",
    icon: <PointOfSaleOutlined />,
  },
  {
    text: "Diario",
    icon: <TodayOutlined />,
  },
  {
    text: "Mensual",
    icon: <CalendarMonthOutlined />,
  },
  {
    text: "Breakdown",
    icon: <PieChartOutlined />,
  },
  {
    text: "Management",
    icon: null,
  },
  {
    text: "Administrador",
    icon: <AdminPanelSettingsOutlined />,
  },
];


export default function DashSidebar({
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile
}){
  const { pathname } = useLocation()
  const [ active, setActive ] = useState("")
  const navigate = useNavigate()
  const theme = useTheme()

  useEffect(() => {
    setActive(pathname.substring(1))
  },[pathname])

  return (
   <article>
    
   </article>
  );
}