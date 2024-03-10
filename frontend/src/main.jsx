import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import darkStore from './app/store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={darkStore}>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />}/>
      </Routes>
    </BrowserRouter>
  </Provider>
)
