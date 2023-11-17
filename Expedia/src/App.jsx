import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import GetApp from './pages/GetApp'
import SignIn from './pages/SignIn'
import StaysResult from './pages/StaysResult'
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="get-app" element={<GetApp />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="stays-results" element={<StaysResult />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
