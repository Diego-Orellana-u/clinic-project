import HouseIcon from "../components/icons/HouseIcon";
import UserIcon from "../components/icons/UserIcon";

export const sidebarSections = [
  {title: 'General', subSections: [['Vista general', 0, <HouseIcon key={0} />, "vista-general"],['Horas agendadas', 1, <HouseIcon key={0} />, "horas-agendadas"],['Horario', 2, <HouseIcon key={2} />, "horario"]]},
  {title: 'Ventas', subSections: [['Dinero', 3, <UserIcon key={3} />, "dinero"],['Ubicación', 4, <HouseIcon key={4} />, "ubicacion"]]},
  {title: 'Geografía', subSections: [['País', 5, <HouseIcon key={5} />, "pais"],['Ciudad', 6, <UserIcon key={6} />, "ciudad"], ['Comuna', 7, <HouseIcon key={7} />, "comuna"]]}
]