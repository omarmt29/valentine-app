// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home'
import Valentine from './valentine'
import './app.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/v/:slug" element={<Valentine />} />
      </Routes>
    </BrowserRouter>
  )
}
