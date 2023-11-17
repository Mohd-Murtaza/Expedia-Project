import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import GetApp from './pages/GetApp'
import SignIn from './pages/SignIn'
import StaysResult from './pages/StaysResult'
function App() {
  return (
    <>
      <Home/>
      {/* <GetApp/> */}
      <StaysResult/>
      {/* <SignIn/> */}
    </>
  )
}

export default App
