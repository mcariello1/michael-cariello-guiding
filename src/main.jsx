import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import MediterraneanTrip from './pages/MediterraneanTrip.jsx'
import Trips from './pages/Trips.jsx'
import EasternSierraTrip from './pages/EasternSierraTrip.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<App />}
        />

        <Route
  path="/trips"
  element={<Trips />}
/>
        <Route
          path="/trips/mediterranean-coastal-climbing"
          element={<MediterraneanTrip />}
        />
        <Route
  path="/trips/eastern-sierra-ski-mountaineering"
  element={<EasternSierraTrip />}
/>

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)