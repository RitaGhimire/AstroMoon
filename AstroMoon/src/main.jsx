import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from './routes/Layout.jsx'
import DetailView from './routes/DetailView.jsx'



const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path = '/WeatherInfo/:symbol' element={<DetailView/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
