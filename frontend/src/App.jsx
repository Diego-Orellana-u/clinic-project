import { Route, Routes } from 'react-router-dom'
import './index.css'
import AgendarHora from './components/AgendarHora.jsx'
import Layout from './components/Layout.jsx'
import MainContent from './components/MainContent.jsx'
import Login from './components/Login.jsx'
import Nosotros from './components/Nosotros.jsx'
import Contacto from './components/Contacto.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Horas from './components/Dashboard/Horas.jsx'
import Horario from './components/Dashboard/Horario.jsx'
import VistaGeneral from './components/Dashboard/VistaGeneral.jsx'


export default function App() {

  return (
    <div className='font-rubik font-light text-left'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainContent />} />
          <Route path='agendar-hora' element={<AgendarHora />} />
          <Route path='login' element={<Login />} />
          <Route path='nosotros' element={<Nosotros />} />
          <Route path='contacto' element={<Contacto />} />
        </Route>
        <Route path='dashboard' element={<Dashboard />}>
          <Route path='vista-general' element={<VistaGeneral />} />
          <Route path='horario' element={<Horario />} />
          <Route path='horas-agendadas' element={<Horas />} />
        </Route>
        
        <Route path='*' element={<div>404 soft error</div>}>
          {/* TODO: add redirection to real server 404 */}
        </Route>
      </Routes>
    </div>
  )
}
