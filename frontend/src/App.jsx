import { Route, Routes } from 'react-router-dom'
import './index.css'
import AgendarHora from './components/AgendarHora.jsx'
import Layout from './components/Layout.jsx'
import MainContent from './components/MainContent.jsx'
import Login from './components/Login.jsx'
import Nosotros from './components/Nosotros.jsx'
import Contacto from './components/Contacto.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'


export default function App({ setActiveSidebar, activeSidebar}) {

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
          {/* <Route path='rut' element={} /> */}
        </Route>
      </Routes>
    </div>
  )
}
